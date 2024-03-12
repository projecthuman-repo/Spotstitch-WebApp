const { Settings } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse, createSuccessResponse } = require('../../../response');

module.exports = async (req, res) => {
    try {

        const { userId } = req.params

        const settings = await Settings.getSettings(userId)
        if (!settings) throw new Error("User does not exist")

        res.status(200).json(createSuccessResponse({ settings: settings }));
    } catch (e) {
        logger.error({ e }, 'Error sending message')
        res.status(400).json(createErrorResponse(400, 'Error sending message'))

    }
}