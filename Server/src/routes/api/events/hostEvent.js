const { Event, validateFields } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse, createSuccessResponse } = require('../../../response');

module.exports = async (req, res) => {
    try {
        // make sure the user is authenticated and we can find their ID
        const userId = res?.locals?.jwtData?.id
        if (!userId) throw new Error('Invalid user ID')

        const { eventInfo } = req.body
        eventInfo.hostId = userId

        // ensure all fields required to create an event are present
        const ignore = ['createdOn']
        const missing = validateFields(Event.schema, eventInfo, ignore)
        if (missing) throw new Error(`Missing required fields: ${missing.toString()}`)

        // attempt to create new event
        const event = await Event.createEvent(eventInfo)
        if (!event) throw new Error('Could not create event')

        res.status(201).json(createSuccessResponse({ event: event }));
    } catch (e) {
        logger.error({ error: e.message }, "Could not create event")
        res.status(400).json(createErrorResponse(400, "Could not create event"))
    }
}