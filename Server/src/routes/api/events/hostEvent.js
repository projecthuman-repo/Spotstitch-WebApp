const{ Event } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse } = require('../../../response');

module.exports = async (req, res) => {
    try {
        
        const { event } = req.body
        const event = await Event.createEvent(event)
        if (!event) throw new Error()

        
        res.status(201).json(event);
    } catch (e) {
        logger.error({e}, 'Error adding address')
        res.status(400).json(e)
        
    }
}