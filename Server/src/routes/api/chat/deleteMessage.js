const{ Message } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse } = require('../../../response');

module.exports = async (req, res) => {
    try {
        
        const { messageId } = req.params

        const msg = await Message.getMessage(messageId)

        if (!msg) throw new Error(createErrorResponse(400, 'Could not find message'))

        msg.deleteMessage() 

       
        res.status(201).json();
    } catch (e) {
        logger.error({e}, 'Error sending message')
        res.status(400).json(e)
        
    }
}