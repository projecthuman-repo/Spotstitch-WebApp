const { createServer } = require("node:http");
const { Server } = require("socket.io");
const ioc = require("socket.io-client");
const app = require('../../src/app')
const server = require('../../src/socket')
const mongoose = require('mongoose')
const { Chat, Message } = require('../../src/model')

function waitFor(socket, event) {
    return new Promise((resolve) => {
        socket.once(event, resolve);
    });
}



describe("Messaging system", () => {
    let io, serverSocket, clientSocket;

    beforeAll((done) => {
        mongoose.disconnect();
        mongoose.connect(process.env.JEST_URI);
        const httpServer = createServer(app);
        server.createSocketServerInstance(httpServer)
        io = server.getio()
        serverSocket = server.getSocket()
        httpServer.listen(() => {
            const port = httpServer.address().port;
            clientSocket = ioc(`http://localhost:${port}`);
            clientSocket.on("connect", done);

        });
    });

    afterAll(async () => {
        await mongoose.disconnect();
        io.close()
        clientSocket.disconnect()
    });

    describe('Chat model', () => {
        let chatId;
        test('creating new chat', async () => {
            const users = ['1', '2']
            const res = await Chat.createChat({ users: users })
            chatId = res._id

            expect(res.users).toEqual(users)
            expect(res.createdAt).toEqual(new Date().toString())
        })
        test('sending message to a chat', async () => {
            const chat = await Chat.getChat(chatId)
            const msg1 = await Message.createMessage(chat._id, '1', 'hi')
            const msg2 = await Message.createMessage(chat._id, '2', 'how are you?')
            await chat.addMessage(msg1)
            await chat.addMessage(msg2)
            const messages = await chat.getHistory()

            expect(messages.length).toEqual(2)
            expect(messages[0].author).toEqual('1')
            expect(messages[0].content).toEqual('hi')
            expect(messages[1].author).toEqual('2')
            expect(messages[1].content).toEqual('how are you?')

            await Message.deleteMany({})
            await Chat.deleteMany({})
        })
    })

    describe('Socket Testing', () => {
        test("should work", (done) => {
            serverSocket = server.getSocket()
            clientSocket.on("hello", (arg) => {
                expect(arg).toBe("world");
                done();
            });
            serverSocket.emit("hello", "world");
        })
        test("should work with an acknowledgement", (done) => {
            serverSocket.on("hi", (cb) => {
                cb("hola");
            });
            clientSocket.emit("hi", (arg) => {
                expect(arg).toBe("hola");
                done();
            });
        });

        test("should work with emitWithAck()", async () => {
            serverSocket.on("foo", (cb) => {
                cb("bar");
            });
            const result = await clientSocket.emitWithAck("foo");
            expect(result).toBe("bar");
        });

        test("should work with waitFor()", () => {
            clientSocket.emit("baz");
            return waitFor(serverSocket, "baz");
        });
    })

    describe('Messaging System', () => {
        let chatId;
        const users = ['1', '2']
        test('should create a chat', async () => {
            const res = await clientSocket.emitWithAck('create chat', users)
            chatId = res.id
            const chat = await Chat.getChat(res.chatId)
            expect(chat._id.toString()).toEqual(res.chatId)
        })

        test('should retrieve all chats of a user', async () => {
            await clientSocket.emitWithAck('create chat', ['1', '3'])

            const user1 = await clientSocket.emitWithAck('get chats', '1')
            expect(user1.rooms.length).toEqual(2)
            const user2 = await clientSocket.emitWithAck('get chats', '2')
            expect(user2.rooms.length).toEqual(1)
            const user3 = await clientSocket.emitWithAck('get chats', '3')
            expect(user3.rooms.length).toEqual(1)
        })
        test('should send a message', async () => {

            const id = await clientSocket.emitWithAck('create chat', ['5', '6'])
            await clientSocket.emitWithAck('message send', id.chatId, '5', 'hi')
            await clientSocket.emitWithAck('message send', id.chatId, '6', 'how are you')

            const chat = await Chat.getChat(id.chatId)
            const messages = await chat.getHistory()
            expect(messages.length).toEqual(2)
        })
        test('User b sends a message, user a should recieve it', (done) => {
            clientSocket.on('message sent', (chatId, author, content) => {
                console.log(`message sent by ${author}: ${content}`)
                done()
            })
            let id;
            clientSocket.emit('connect to rooms', 'a', (res) => {
                clientSocket.emit('create chat', ['a','b'], (res) => {
                    id = res.chatId
                    clientSocket.emit('message send', id, 'b', 'hi, this is b', (res) => {
                        console.log(res)
                    })
                })
            })

            waitFor(serverSocket, 'message sent')

        })
        test('User 5 sends a message, client should not recieve it', async () => {
            const id = await clientSocket.emitWithAck('create chat', ['5', '6'])

            
            const res = await clientSocket.emitWithAck('send message', id.chatId, '5', 'hi, this is 5')
            expect(res.status).toEqual('ok')
            




        })
    })

});