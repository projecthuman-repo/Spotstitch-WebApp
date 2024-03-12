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
        await Chat.deleteMany({})
        mongoose.disconnect();
        io.close()
        clientSocket.disconnect()
    });

    describe('Chat model', () => {
        test('creating new chat', async () => {
            const users = ['1', '2']
            const res = await Chat.createChat({users: users})
            expect(res.users).toEqual(users)
        })
        test('', async () => {

        })
    })

    describe('Socket Testing', () => {
        test("should work", (done) => {
            serverSocket = server.getSocket()
            clientSocket.on("hello", (arg) => {
                expect(arg).toBe("world");
                done();
            });
            io.emit("hello", "world");
        });
    
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
    
        test('should create a chat', async () => {
            const users = ['1', '2']

            clientSocket.on('user rooms', (rooms) => {
                expect(rooms.length).not.toBe(0)
            })  

            const res = await clientSocket.emitWithAck('create chat', users)
            const chat = await Chat.getChat(res)

            expect(chat._id).toEqual(res)
        })
        
    })

    
});