const{ Address } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse, createSuccessResponse } = require('../../../response');

module.exports = async (req, res) => {
    try {
        // make sure the user is authenticated and we can find their ID
        const userId = res?.locals?.jwtData?.id
        if (!userId) throw new Error('Invalid user ID')

        // search for addresses based on user id
        const addr = await Address.getUserAddresses(userId)
        if (!addr) throw new Error(createErrorResponse(400, 'Could not find addresses'))
        
        res.status(200).json(createSuccessResponse({address: addr}));
    } catch (e) {
        logger.error({ error: e.message }, 'Error finding address')
        res.status(400).json(createErrorResponse(400, 'Could not find addresses'))
    }
}