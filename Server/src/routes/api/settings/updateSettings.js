const{ Settings, validateFields } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse, createSuccessResponse } = require('../../../response');

module.exports = async (req, res) => {
    try {
        // make sure the user is authenticated and we can find their ID
        const userId = res?.locals?.jwtData?.id
        if (!userId) throw new Error('Invalid user ID')
        
        const { settings } = req.body

        // ensure all fields required to create the model are present
        const missing = validateFields(Settings.schema, settings)
        if (missing) throw new Error(`Missing required fields: ${missing.toString()}`)

        // make sure the settings for the user exists
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