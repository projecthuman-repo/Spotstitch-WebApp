const { Event, CrossPlatformEvent } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse, createSuccessResponse } = require('../../../response');

async function updateEventDetails(crossEvent, event, updateData) {
    // Attributes that are allowed to be updated in CrossPlatformEvent
    const crossAttributes = ["hostName", "email", "address", "phoneNumber", "description", "eventTime"];

    // Attributes that are allowed to be updated in Event
    const eventAttributes = ["hostName", "email", "title", "price", "description", "createdOn", "date", "eventType", "startTime", "endTime", "eventTime", "address", "tags"];

    // Proceed with the update logic, now both `crossAttributes` and `eventAttributes` are defined
    // Update CrossPlatformEvent attributes if applicable
    if (crossEvent) {
        const crossUpdates = {};
        Object.keys(updateData).forEach(key => {
            if (crossAttributes.includes(key)) {
                crossUpdates[key] = updateData[key];
            }
        });
        await CrossPlatformEvent.findByIdAndUpdate(crossEvent._id, crossUpdates, { new: true });
    }

    // Update Event attributes if applicable
    if (event) {
        const eventUpdates = {};
        Object.keys(updateData).forEach(key => {
            if (eventAttributes.includes(key)) {
                eventUpdates[key] = updateData[key];
            }
        });
        await Event.findByIdAndUpdate(event._id, eventUpdates, { new: true });
    }
}


module.exports = async (req, res) => {
    try {
        const { eventId: hostId } = req.params;

        // Attempt to find events by hostId
        const crossEvent = await CrossPlatformEvent.findOne({ hostId });
        const event = await Event.findOne({ hostId });

        if (!crossEvent && !event) {
            throw new Error('Event not found in any database');
        }

        // Update the details of both events if they exist
        await updateEventDetails(crossEvent, event, req.body);

        res.status(200).json(createSuccessResponse({ message: "Events updated successfully" }));
    } catch (error) {
        logger.error({ error: error.message }, "Could not update events");
        res.status(400).json(createErrorResponse(400, error.message));
    }
};
