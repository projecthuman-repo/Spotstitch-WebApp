const { Event } = require('../../../model');
const { CrossPlatformEvent } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse, createSuccessResponse } = require('../../../response');
const mongoose = require('mongoose');

module.exports = async (req, res) => {
    const session = await mongoose.startSession(); // Start a session for the transaction
    session.startTransaction(); // Start the transaction
    try {

        console.log('Creating event');
        const crossEvent = new CrossPlatformEvent({
            hostId: req.body.hostId,
            hostName: req.body.hostName,
            email: req.body.email,
            address: req.body.address,
            phoneNumber: req.body.phoneNumber,
            description: req.body.description,
            eventTime: req.body.eventTime
        });
        // await crossEvent.save();
        console.log("Cross event created");

            const spotstitchEvent = new Event({
                hostId: req.body.hostId,
                hostName: req.body.hostName,
                email: req.body.email,
                address: req.body.address,
                description: req.body.description,
                eventTime: req.body.eventTime
            });
            await spotstitchEvent.save({ session});
            await crossEvent.save({ session });
            await session.commitTransaction();



        

        res.status(201).json(createSuccessResponse({ event: crossEvent }));
    } catch (e) {
        console.log("there has been an error");
        console.log(req.body);
        logger.error({ error: e.message }, "Could not create event")
        res.status(400).json(createErrorResponse(400, "Could not create event"))
    }
    finally {
        session.endSession();
    }
}