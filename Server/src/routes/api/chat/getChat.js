const{ Chat } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse } = require('../../../response');

module.exports = async (req, res) => {
    try {
        
        const { chatId, } = req.body

        const chat = await Chat.getChat(chatId)
        if (!chat) throw new Error()
        
        res.status(201).json(chat);
    } catch (e) {
        logger.error({e}, 'Error sending message')
        res.status(400).json(createErrorResponse(400, 'Error sending message'))
        
    }
}