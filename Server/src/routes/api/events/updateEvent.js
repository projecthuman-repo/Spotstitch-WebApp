const{ Event } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse } = require('../../../response');

module.exports = async (req, res) => {
    try {
        
        const { eventId } = req.params.eventId
        const { event } = req.body
        const update = await Event.getEvent(eventId)
        if (!update) throw new Error()
        await update.updateEvent(event)
        
        res.status(201).json(update);
    } catch (e) {
        logger.error({e}, 'Error adding address')
        res.status(400).json(e)
        
    }
}