const { Event } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse, createSuccessResponse } = require('../../../response');

module.exports = async (req, res) => {
    try {
        const { filters } = req.body
        
        // search for events by filters
        const events = await Event.getEvents(filters)
        if (!events) throw new Error('No events found')

        res.status(201).json(createSuccessResponse({ events: events }));
    } catch (e) {
        logger.error({ error: e.message }, e.message)
        res.status(400).json(createErrorResponse(400, "Could not find events"))

    }
}