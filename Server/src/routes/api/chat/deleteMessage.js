const{ Message } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse } = require('../../../response');

module.exports = async (req, res) => {
    try {
        
        const { msgId } = req.body

        const msg = await Message.getMessage(msgId)

        if (!msg) throw new Error(createErrorResponse(400, 'Could not find message'))

        msg.deleteMessage() 

       
        res.status(201).json();
    } catch (e) {
        logger.error({e}, 'Error sending message')
        res.status(400).json(e)
        
    }
}