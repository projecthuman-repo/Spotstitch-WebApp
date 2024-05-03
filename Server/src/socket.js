
// Connect chatting server
const { Server } = require("socket.io");
const { Chat, Message, User } = require("./model");
const { verifyToken, decodeToken } = require("./authorization/auth");
const { createSuccessResponse, createErrorResponse } = require("./response");
const logger = require("./logger");
const io = new Server()
let serverSocket;

// Socket events
const userConnect = 'connected'
const chatOpen = 'chat open'
const chatOpened = 'chat opened'
const chatGetAll = 'chats get'
const chatSentAll = 'chats all'
const chatCreate = 'chat create'
const chatCreated = 'chat created'
const chatConnect = 'connect to chats'
const messageSend = 'message send'
const messageSent = 'message sent'
const messageUpdate = 'message update'
const messageUpdated = 'message updated'


/**
 * Create server instance for our socket
 * 
 * @param {http} server http server to create socket on
 */
const createSocketServerInstance = async (server) => {
    io.attach(server, {
        cors: {
            origin: '*',
        }
    })
    io.engine.use((req, res, next) => {
        //verifyToken(req, res, next)
        next();
    });

    io.on('connection', (socket) => {
        serverSocket = socket


        socket.on(userConnect, async (token) => {
            const tokenData = await decodeToken(token)
            if (tokenData.id) {
                logger.info({ auth: tokenData }, "User connected to socket server")
                const user = await User.findById(tokenData.id)
                socket.username = user.username
                socket.join(socket.username)
            }
        })


        socket.on(chatConnect, async (callback) => {
            callback = typeof callback == "function" ? callback : () => { };
            try {
                const chats = await Chat.getUserChats(socket.username)

                socket.join(socket.username)
                for (const chat of chats) {
                    socket.join(chat._id)
                }
                logger.info({
                    user: socket.username,
                    chats: chats.map((room) => { return room._id })
                }, 'Connecting to chats for user')
                callback(createSuccessResponse({ chats: chats }))
            }
            catch (error) {
                callback(createErrorResponse(400, error.message));
            }
        })

        // Create new chat
        socket.on(chatCreate, async (users, callback) => {
            callback = typeof callback == "function" ? callback : () => { };

            try {
                const chat = await Chat.createChat({ users: users })
                if (!chat) throw new Error('Chat could not be created')
                logger.info({ to: users }, 'new chat created')

                for (const user of users) {
                    io.to(user).emit(chatCreated, chat)
                    logger.info({ to: user }, "New chat emitted")
                }

                callback(createSuccessResponse({ chatId: chat._id }))
            }
            catch (error) {
                callback(createErrorResponse(400, error.message));
            }
        })

        socket.on(chatGetAll, async (callback) => {
            callback = typeof callback == "function" ? callback : () => { };
            try {
                const chats = await Chat.getUserChats(socket.username)
                for (const chat of chats) {
                    if (!chat.populated('history')) await chat.populate('history')
                }
                io.to(socket.username).emit(chatSentAll, chats)
                callback(createSuccessResponse({ chats: chats }))
            }
            catch (error) {
                callback(createErrorResponse(400, error.message));
            }
        })

        socket.on(chatOpen, async (chatId, callback) => {
            callback = typeof callback == "function" ? callback : () => { };
            try {
                const chat = await Chat.getChat(chatId)
                if (!chat.populated('history')) await chat.populate('history')

                io.to(socket.username).emit(chatOpened, chatId, chat.getHistory())
                callback(createSuccessResponse({ chat: chat }))
            }
            catch (error) {
                callback(createErrorResponse(400, error.message));
            }
        })


        socket.on(messageUpdate, async (chatId, messageId, content, callback) => {
            callback = typeof callback == "function" ? callback : () => { };
            try {
                const message = await Message.getMessage(messageId)
                message.editMessage(content)
                io.to(chatId).emit(messageUpdated, {
                    chatId: chatId,
                    content: content
                })
                callback(createSuccessResponse({ message: message }))
            }
            catch (error) {
                callback(createErrorResponse(400, error.message));
            }

        })

        socket.on(messageSend, async (chatId, content, callback) => {
            callback = typeof callback == "function" ? callback : () => { };
            try {
                const chat = await Chat.getChat(chatId)
                if (!chat) throw new Error("Could not find chat")

                const message = await Message.createMessage(chatId, socket.username, content)
                if (!message) throw new Error("Error creating new message")

                chat.addMessage(message._id)

                for (const user of chat.users) {
                    io.to(user).emit(messageSent, chatId, message)
                }

                logger.info({ content, users: chat.users }, 'message created')
                callback(createSuccessResponse({ message: message }))
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



