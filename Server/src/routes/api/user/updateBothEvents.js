const {CrossPlatformEvent} = require('../../../model');
const {Event} = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse, createSuccessResponse } = require('../../../response');

module.exports = async (req, res) => {
    try {

        const { eventId } = req.params;
        console.log(eventId);

        let crossExists = true;
        let spotExists = true;

        // attempt to find event from id
        const crossEvent = await CrossPlatformEvent.findById(eventId.hostId);
        if (!crossEvent) {
            crossExists = false;
            console.log('Could not crossplatform event');
            
        }

        console.log("CROSS EVENT SUCCESSFULLY FOUND");

        const event = await Event.findOne({ hostId: eventId.hostId });
        if (!event) {
          spotExists = false;
          console.log('Could not find spotstitch event');
        }

        console.log("spot EVENT SUCCESSFULLY FOUND");

        update(crossExists, spotExists, crossEvent, event);
        
    } catch (e) {
        logger.error({ error: e.message }, "Could not find event")
        res.status(400).json(createErrorResponse(400, "Could not find event"))

    }

    const update = async (crossExists, spotExists, crossEvent, spotEvent) => {

        const crossAttList = ["hostName", "email", "address", "phoneNumber", "description", "eventTime"];

        const spotAttList = ["hostName", "email", "title", "price", "description", "createdOn", "date", "eventType", "startTime", "endTime", "eventTime", "address", "tags"];

        const crossDataList = {
            hostId: crossEvent.hostId,
            hostName: crossEvent.hostName,
            email: crossEvent.email,
            address: crossEvent.address,
            phoneNumber: crossEvent.phoneNumber,
            description: crossEvent.description,
            eventTime: crossEvent.eventTime
        }

        const spotDataList = {
            hostId: spotEvent.hostId,
            hostName: spotEvent.hostName,
            email: spotEvent.email,
            title: spotEvent.title,
            price: spotEvent.price,
            description: spotEvent.description,
            createdOn: spotEvent.createdOn,
            date: spotEvent.date,
            eventType: spotEvent.eventType,
            startTime: spotEvent.startTime,
            endTime: spotEvent.endTime,
            eventTime: spotEvent.eventTime,
            address: spotEvent.address,
            tags: spotEvent.tags
        }

    // Check and update CrossPlatformEvent attributes
    if (crossExists) {
        for (let attribute in req.body) {
        if (crossAttList.includes(attribute)) {
            crossDataList[attribute] = req.body[attribute];
        }
        }
    
        // Update CrossPlatformEvent in the database
        try {
        await CrossPlatformEvent.findOneAndUpdate({hostId: crossDataList.hostId}, crossDataList, {new: true});
        } catch (error) {
        console.error('Error updating CrossPlatformEvent:', error);
        }
    }
    
    // Check and update Event attributes
    if (spotExists) {
        for (let attribute in req.body) {
        if (spotAttList.includes(attribute)) {
            spotDataList[attribute] = req.body[attribute];
        }
        }
    
        // Update Event in the database
        try {
        await Event.findOneAndUpdate({hostId: spotDataList.hostId}, spotDataList, {new: true});
        } catch (error) {
        console.error('Error updating Event:', error);
        }
    }

        }

    


}
