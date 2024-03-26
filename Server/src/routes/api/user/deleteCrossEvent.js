const mongoose = require('mongoose');
const { Event, CrossPlatformEvent } = require('../../../model');

module.exports = async (req, res) => {
    const session = await mongoose.startSession();
    try {
        await session.startTransaction();
        const { hostId } = req.params;

        // Find the event in the Event database
        const spotStitchEvent = await Event.findOne({ hostId: hostId }, null, { session });

        // Find the event in the CrossPlatformEvent database
        const crossPlatformEvent = await CrossPlatformEvent.findOne({ hostId: hostId }, null, { session });

        // Delete the event from the Event database if it exists
        if (spotStitchEvent) {
            await spotStitchEvent.deleteOne({ session });
        }

        // Delete the event from the CrossPlatformEvent database if it exists
        if (crossPlatformEvent) {
            await crossPlatformEvent.deleteOne({ session });
            await session.commitTransaction();
            res.status(200).json({ status: "success", message: 'Event successfully deleted from CrossPlatformEvent.' });
        } else {
            // If no crossPlatformEvent exists, no need to commit transaction or delete anything.
            await session.abortTransaction(); 
            res.status(404).json({ status: "error", error: { code: 404, message: 'Event not found in CrossPlatformEvent.' } });
        }
    } catch (e) {
        await session.abortTransaction();
        console.error("Error during event deletion", e);
        res.status(400).json({ status: "error", error: { code: 400, message: e.message || "Could not delete event" } });
    } finally {
        await session.endSession();
    }
};