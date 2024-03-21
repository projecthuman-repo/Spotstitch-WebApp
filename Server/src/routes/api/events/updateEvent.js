const{ Event, validateFields } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse, createSuccessResponse } = require('../../../response');

module.exports = async (req, res) => {
    try {
        
        const { eventId } = req.params.eventId
        const { eventInfo } = req.body

        // attempt to find event with id
        const update = await Event.getEvent(eventId)
        if (!update) throw new Error('Could not find event')

        // ensure all fields required to create an event are present
        const ignore = ['createdOn']
        const valid = validateFields(Event.schema, eventInfo, ignore)
        if (valid) throw new Error(`Missing required fields: ${valid.toString()}`)

        await update.updateEvent(eventInfo)
        
        res.status(201).json(createSuccessResponse({ event: update }));
    } catch (e) {
        logger.error({ error: e.message }, "Could not update event")
        res.status(400).json(createErrorResponse(400, "Could not update event"))
        
    }
}