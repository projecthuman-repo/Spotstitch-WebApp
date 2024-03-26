const { Event, CrossPlatformEvent, validateFields } = require('../../../model'); // Make sure CrossPlatformEvent is imported
const logger = require('../../../logger');
const { createErrorResponse, createSuccessResponse } = require('../../../response');

module.exports = async (req, res) => {
    const session = await mongoose.startSession(); // Start a session for the transaction
    session.startTransaction(); // Start the transaction

    try {
        // Authentication and user ID retrieval logic remains the same
        const userId = res?.locals?.jwtData?.id;
        if (!userId) throw new Error('Invalid user ID');

        // Assuming `eventInfo` contains the fields needed for both Event and CrossPlatformEvent
        const { eventInfo } = req.body;
        eventInfo.hostId = userId;

        // Validation logic remains the same
        const ignore = ['createdOn'];
        const missing = validateFields(Event.schema, eventInfo, ignore);
        if (missing) throw new Error(`Missing required fields: ${missing.toString()}`);

        // Create an Event document
        const event = new Event(eventInfo);

        // You might also need to prepare data for CrossPlatformEvent if it has additional fields
        const crossPlatformEventData = { ...eventInfo };
        const crossEvent = new CrossPlatformEvent(crossPlatformEventData);

        // Save both documents within the transaction
        await event.save({ session });
        await crossEvent.save({ session });

        // Commit the transaction if both documents are saved successfully
        await session.commitTransaction();

        res.status(201).json(createSuccessResponse({ event: event }));
    } catch (e) {
        // If any error occurs, abort the transaction
        await session.abortTransaction();
        logger.error({ error: e.message }, "Could not create event");
        res.status(400).json(createErrorResponse(400, "Could not create event"));
    } finally {
        // End the session
        session.endSession();
    }
};
