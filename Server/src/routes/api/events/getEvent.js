const{ Event } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse } = require('../../../response');

module.exports = async (req, res) => {
    try {
        
        const { eventId } = req.body
        const event = await Event.getEvent(eventId)
        if (!event) throw new Error()

        
        res.status(201).json(event);
    } catch (e) {
        logger.error({e}, 'Error adding address')
        res.status(400).json(e)
        
    }
}