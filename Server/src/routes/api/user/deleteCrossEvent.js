const { Event, CrossPlatformEvent } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse, createSuccessResponse } = require('../../../response');
const mongoose = require('mongoose');

module.exports = async (req, res) => {
  const session = await mongoose.startSession(); // Start a session for the transaction
  try {
    session.startTransaction(); // Start the transaction
    const { eventId: hostId } = req.params;
    // // Ensure the user is authenticated and we can find their ID
    // const userId = res?.locals?.jwtData?.id;
    // if (!userId) throw new Error('Invalid user ID');

    // Confirm that the events exist and that the user owns the events
    const crossEvent = await CrossPlatformEvent.findOne({ _id: hostId, hostId: userId }).session(session);
    if (!crossEvent) throw new Error('Could not find cross-platform event');

    const event = await Event.findOne({ _id: hostId, hostId: userId }).session(session);
    if (!event) throw new Error('Could not find event');

    // If the events exist and are owned by the user, delete them using their respective methods
    if (crossEvent) await crossEvent.deleteEvent();
    if (event) await event.deleteEvent();

    // Commit the transaction to ensure both documents are deleted atomically
    await session.commitTransaction();

    // Respond back to the user
    res.status(200).json(createSuccessResponse({ message: 'Event successfully deleted' }));
  } catch (e) {
    // Abort the transaction in case of an error
    session.abortTransaction();
    logger.error({ error: e.message }, "Could not cancel event");
    res.status(400).json(createErrorResponse(400, e.message));
  } finally {
    // End the session
    session.endSession();
  }
};
