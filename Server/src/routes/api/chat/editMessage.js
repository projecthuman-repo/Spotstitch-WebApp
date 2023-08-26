const{ Message } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse } = require('../../../response');

module.exports = async (req, res) => {
    try {
        const { messageId } = req.params
        const { content } = req.body

        const msg = Message.getMessage(messageId)

        msg.editMessage(content)
       
        res.status(201).json(msg);
    } catch (e) {
        logger.error({e}, 'Error sending message')
        res.status(400).json(createErrorResponse(400, 'Error sending message'))
        
    }
}