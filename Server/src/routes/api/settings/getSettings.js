const { Settings } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse, createSuccessResponse } = require('../../../response');

module.exports = async (req, res) => {
    try {
        // make sure the user is authenticated and we can find their ID
        const userId = res?.locals?.jwtData?.id
        if (!userId) throw new Error('Invalid user ID')

        // check if settings exist for the user, otherwise throw an error
        const settings = await Settings.getSettings(userId)
        if (!settings) throw new Error("User does not exist")

        // return current settings back to the client
        res.status(200).json(createSuccessResponse({ settings: settings }));
    } catch (error) {
        console.log(error)
        logger.error({ error: error }, 'Error getting settings')
        res.status(400).json(createErrorResponse(400, 'Error getting settings'))

    }
}