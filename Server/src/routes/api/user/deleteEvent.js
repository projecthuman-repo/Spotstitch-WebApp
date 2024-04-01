const { Event } = require('../../../model');
const { CrossPlatformEvent } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse, createSuccessResponse } = require('../../../response');

module.exports = async (req, res) => {
    try {
        const { eventId } = req.params;
        // const userId = res?.locals?.jwtData?.id;
        // if (!userId) throw new Error('Invalid user ID');

        // Confirm that the event exists and that the user owns the event in SpotStitch
        const event = await Event.getEvent(eventId);
        console.log(`Attempting to cancel event with ID: ${eventId}`);

        if (!event) throw new Error('Could not find event');
        // if (event.hostId != userId) throw new Error('User is not hosting this event');

        // Delete the event from SpotStitch
        await event.deleteEvent();

        // Also attempt to delete the event from the cross-platform database
        // Assuming email is a unique identifier for events across databases
        const crossPlatformEvent = await CrossPlatformEvent.findOne({ email: event.email });
        if (crossPlatformEvent) {
            await crossPlatformEvent.remove(); // Using .remove() for Mongoose document deletion
        } else {
            logger.info("Event not found in cross-platform database, or already deleted.");
        }

        // Send back deleted event to user as confirmation
        res.status(201).json(createSuccessResponse({ event: event }));
    } catch (e) {
        logger.error({ error: e.message }, "Could not cancel event");
        res.status(400).json(createErrorResponse(400, "Could not cancel event"));
    }
};
