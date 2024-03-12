const{ Message, Chat } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse } = require('../../../response');
const socket = require('../../../socket')
module.exports = async (req, res) => {
    try {
        
        const { chatId, content, author } = req.body
        const chat = await Chat.getChat(chatId)
        if (!chat) throw new Error()

        const msg = Message.createMessage(chat._id, author, content)

        chat.addMessage(msg._id)
        const io = socket.getSocket()
        io.to(chatId).emit('send message', chatId, content, author)
       
        res.status(201).json(msg);
    } catch (e) {
        logger.error({e}, 'Error sending message')
        res.status(400).json(createErrorResponse(400, 'Error sending message'))
        
    }
}