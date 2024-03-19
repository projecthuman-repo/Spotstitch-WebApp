const{ Event } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse, createSuccessResponse } = require('../../../response');

module.exports = async (req, res) => {
    try {
        
        const { eventId } = req.params

        // make sure the user is authenticated and we can find their ID
        const userId = res?.locals?.jwtData?.id
        if (!userId) throw new Error('Invalid user ID')

        // confirm that the event exists and that the user owns the event
        const event = await Event.getEvent(eventId)
        if (!event) throw new Error('Could not find event')
        if (event.hostId != userId) throw new Error('User is not hosting this event')

        await event.deleteEvent()
        
        // send back deleted event to user
        res.status(201).json(createSuccessResponse({ event: event }));
    } catch (e) {
        logger.error({ error: e.message }, e.message)
        res.status(400).json(createErrorResponse(400, "Could not cancel event"))
        
    }
}