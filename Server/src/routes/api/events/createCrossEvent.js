const { Event, validateFields } = require('../../../model');
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
        const missing = validateFields(CrossPlatformEvent.schema, crossEvent, []);
        if (missing) throw new Error(`Missing required fields: ${missing.toString()}`);
        else{
            await crossEvent.save();
        res.status(201).json(createSuccessResponse({ event: crossEvent }));
        }
    } catch (e) {
        console.log("there has been an error");
        console.log(req.body);
        logger.error({ error: e.message }, "Could not create event")
        res.status(400).json(createErrorResponse(400, "Could not create event"))
    }
}