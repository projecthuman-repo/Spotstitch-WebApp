
// Connect chatting server
const { Server } = require("socket.io");
const { http } = require('http');
const { Chat, Message } = require("./model");
const io = new Server()
let serverSocket;
/**
 * Create server instance for our socket
 * 
 * @param {http} server http server to create socket on
 */
const createSocketServerInstance = async (server) => {
    io.attach(server)
    io.on('connection', (socket) => {
        serverSocket = socket

        socket.on('connected', (userId) => {

        })

        // Create new chat
        socket.on('create chat', async (users, cb) => {
            const chat = await Chat.createChat({ users: users })
            socket.emit('new chat', chat._id)
            cb(chat._id)
        })

        socket.on('get rooms', async (userId, ) => {
            const rooms = await Chat.getUserChat(userId)
            socket.emit('user rooms', rooms)
        })

        socket.on('open chat', async (chatId) => {
            const chat = await Chat.getChat(chatId)

            io.to(chatId).emit('open chat', chat.getHistory(), chatId)
        })

        socket.on('update chat', async (chatId, messageId, content) => {
            const chat = await Chat.getChat(chatId)
            const message = await Message.getMessage(messageId)
            message.editMessage(content)
            io.to(chatId).emit('edit message', content, chatId)
        })

        socket.on('send message', async (chatId, author, content) => {
            const chat = await Chat.getChat(chatId)
            const message = await Message.createMessage(chatId, author, content)
            chat.addMessage(message._id)
            io.to(chatId).emit('send message', content, chatId, author)
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



