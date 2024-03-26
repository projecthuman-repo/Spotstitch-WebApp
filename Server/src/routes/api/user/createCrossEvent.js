// const { Event, validateFields } = require('../../../model');
const { CrossPlatformEvent } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse, createSuccessResponse } = require('../../../response');

module.exports = async (req, res) => {
    try {
        console.log('Creating event; ', req.body);
        const crossEvent = new CrossPlatformEvent({
            eventID: req.body.eventID,
            email: req.body.email,
            location: req.body.location,
            phoneNumber: req.body.phoneNumber,
            description: req.body.description,
            eventTime: req.body.eventTime
        });
        await CrossPlatformEvent.create(crossEvent);
        res.status(201).json(createSuccessResponse({ event: crossEvent }));
    } catch (e) {
        console.log("there has been an error");
        logger.error({ error: e.message }, "Could not create event")
        res.status(400).json(createErrorResponse(400, "Could not create event"))
    }
}