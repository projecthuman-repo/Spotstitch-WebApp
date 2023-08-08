const{ Event } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse } = require('../../../response');

module.exports = async (req, res) => {
    try {
        
        const events = await Event.getEvents()
        if (!events) throw new Error('No events found')

        
        res.status(201).json(events);
    } catch (e) {
        logger.error({e}, e.message)
        res.status(400).json(e)
        
    }
}