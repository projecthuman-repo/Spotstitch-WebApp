const { CrossPlatformEvent } = require('../../../models/CrossPlatformEvent');
const logger = require('../../../logger');
const { createErrorResponse, createSuccessResponse } = require('../../../response');

module.exports = async (req, res) => {

    try{
        const crossEvents = await CrossPlatformEvent.getAllCrossEvents(filters);
        if (!crossEvents) throw new Error('No events found')

        res.status(201).json(createSuccessResponse({ events: crossEvents }));
    }
    catch (e){
        logger.error({ error: e.message }, "Could not find events")
        res.status(400).json(createErrorResponse(400, "Could not find events"))
    }
    
}