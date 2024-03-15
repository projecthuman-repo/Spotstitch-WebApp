const { Settings } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse, createSuccessResponse } = require('../../../response');

module.exports = async (req, res) => {
    try {

        const userId = res?.locals?.jwtData?.id
        if (!userId) throw new Error('Invalid user ID')
        const settings = await Settings.getSettings(userId)
        if (!settings) throw new Error("User does not exist")

        res.status(200).json(createSuccessResponse({ settings: settings }));
    } catch (error) {
        console.log(error)
        logger.error({ error: error }, 'Error getting settings')
        res.status(400).json(createErrorResponse(400, 'Error getting settings'))

    }
}