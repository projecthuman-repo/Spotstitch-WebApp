const{ Settings } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse, createSuccessResponse } = require('../../../response');

module.exports = async (req, res) => {
    try {
        
        const { userId } = req.params
        const { settings } = req.body

        // make sure a valid user exists
        const update = await Settings.getSettings(userId)
        if (!update) throw new Error("User does not exist")

        update.updateSettings(settings)
        
        // send back updated settings
        res.status(201).json(createSuccessResponse({settings: settings}));
    } catch (e) {
        logger.error({e}, 'Error sending message')
        res.status(400).json(createErrorResponse(400, 'Error sending message'))
        
    }
}