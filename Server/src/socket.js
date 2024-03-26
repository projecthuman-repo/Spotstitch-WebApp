
// Connect chatting server
const { Server } = require("socket.io");
const { Chat, Message } = require("./model");
const { verifyToken } = require("./authorization/auth");
const { createSuccessResponse, createErrorResponse } = require("./response");
const io = new Server()
let serverSocket;
/**
 * Create server instance for our socket
 * 
 * @param {http} server http server to create socket on
 */
const createSocketServerInstance = async (server) => {
    io.attach(server)
    io.engine.use((req, res, next) => {
        //verifyToken(req, res, next)
        next();
    });
    io.on('connection', (socket) => {
        serverSocket = socket

        socket.on('connect to rooms', async (userId, callback) => {
            callback = typeof callback == "function" ? callback : () => { };
            try {
                const rooms = await Chat.getUserChats(userId)
                for (const room of rooms) {
                    socket.join(room._id)
                }
                callback(createSuccessResponse({ rooms: rooms }))
            }
            catch (error) {
                callback(createErrorResponse(400, error.message));
            }
        })

        // Create new chat
        socket.on('create chat', async (users, callback) => {
            callback = typeof callback == "function" ? callback : () => { };
            
            try {
                const chat = await Chat.createChat({ users: users })
                if (!chat) throw new Error('Chat could not be created')

                for (const user of users) {
                    socket.emit('connected', user)
                }

                callback(createSuccessResponse({ chatId: chat._id }))
            }
            catch (error) {
                callback(createErrorResponse(400, error.message));
            }
        })

        socket.on('get chats', async (userId, callback) => {
            callback = typeof callback == "function" ? callback : () => { };
            try {
                const rooms = await Chat.getUserChats(userId)
                callback(createSuccessResponse({ rooms: rooms }))
            }
            catch (error) {
                callback(createErrorResponse(400, error.message));
            }
        })

        socket.on('open chat', async (chatId) => {
            const chat = await Chat.getChat(chatId)

            io.to(chatId).emit('open chat', chat.getHistory(), chatId)
        })


        socket.on('update message', async (chatId, messageId, content, callback) => {
            callback = typeof callback == "function" ? callback : () => { };
            try {
                const message = await Message.getMessage(messageId)
                message.editMessage(content)
                io.to(chatId).emit('message edited', {
                    chatId: chatId,
                    content: content
                })
                callback(createSuccessResponse({ message: message }))
            }
            catch (error) {
                callback(createErrorResponse(400, error.message));
            }

        })

        socket.on('send message', async (chatId, author, content, callback) => {
            callback = typeof callback == "function" ? callback : () => { };
            try {
                const chat = await Chat.getChat(chatId)
                if (!chat) throw new Error("Could not find chat")

                const message = await Message.createMessage(chatId, author, content)
                if (!message) throw new Error("Error creating new message")

                chat.addMessage(message._id)
                
                const clients = io.sockets.adapter.rooms.get(chatId);
                console.log(clients)
                io.to(chatId).emit('message sent', chatId, author, content)
                callback(createSuccessResponse({ message: message, clients: clients }))
            }
            catch (error) {
                callback(createErrorResponse(400, error.message));
            }
        });

        socket.on("typing", (room) => socket.in(room).emit("typing"));
        socket.on("stop-typing", (room) => socket.in(room).emit("stop-typing"));
    });
}

/**
 * Return existing socket to application
 * 
 * @returns socket instance
 */
const getSocket = () => {
    return serverSocket
}

/**
 * Return existing io to application
 * 
 * @returns io instance
 */
const getio = () => {
    return io
}

module.exports = {
    createSocketServerInstance,
    getSocket,
    getio
}



