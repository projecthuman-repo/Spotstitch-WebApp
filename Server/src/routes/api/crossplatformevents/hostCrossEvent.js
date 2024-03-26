const { Event, CrossPlatformEvent, validateFields } = require('../../../model'); // Make sure these are imported
const logger = require('../../../logger');
const { createErrorResponse, createSuccessResponse } = require('../../../response');
const mongoose = require('mongoose');

module.exports = async (req, res) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const userId = res?.locals?.jwtData?.id;
        if (!userId) throw new Error('Invalid user ID');

        const { eventInfo } = req.body;
        eventInfo.hostId = userId;

        // Validate fields for Event
        const missingEventFields = validateFields(Event.schema, eventInfo);
        if (missingEventFields) throw new Error(`Missing required fields for Event: ${missingEventFields.toString()}`);

        // Prepare and validate fields for CrossPlatformEvent
        const crossPlatformEventInfo = {
            hostId: eventInfo.hostId,
            hostName: eventInfo.hostName,
            email: eventInfo.email,
            address: eventInfo.address,
            phoneNumber: eventInfo.phoneNumber,
            description: eventInfo.description,
            eventTime: eventInfo.date + ' ' + eventInfo.startTime // Example of combining fields
        };
        const missingCrossPlatformFields = validateFields(CrossPlatformEvent.schema, crossPlatformEventInfo);
        if (missingCrossPlatformFields) throw new Error(`Missing required fields for CrossPlatformEvent: ${missingCrossPlatformFields.toString()}`);

        // Create and save Event
        const event = new Event(eventInfo);
        await event.save({ session });

        // Create and save CrossPlatformEvent
        const crossEvent = new CrossPlatformEvent(crossPlatformEventInfo);
        await crossEvent.save({ session });

        await session.commitTransaction();
        res.status(201).json(createSuccessResponse({ event: event, crossEvent: crossEvent }));
    } catch (e) {
        await session.abortTransaction();
        logger.error({ error: e.message }, "Could not create event");
        res.status(400).json(createErrorResponse(400, e.message));
    } finally {
        session.endSession();
    }
};
