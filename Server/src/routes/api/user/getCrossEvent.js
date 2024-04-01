const { CrossPlatformEvent } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse, createSuccessResponse } = require('../../../response');

module.exports = async (req, res) => {
    try {

        const { eventId } = req.params;
        console.log(eventId);

        // attempt to find event from id
        const event = await CrossPlatformEvent.findById(eventId);
        if (!event) throw new Error('Could not find event')

        res.status(201).json(createSuccessResponse({ event: event }));
    } catch (e) {
        logger.error({ error: e.message }, "Could not find event")
        res.status(400).json(createErrorResponse(400, "Could not find event"))

    }
}