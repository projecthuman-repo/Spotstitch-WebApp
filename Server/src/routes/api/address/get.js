const{ Address } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse, createSuccessResponse } = require('../../../response');

module.exports = async (req, res) => {
    try {
        const { userId } = req.params

        const addr = await Address.getUserAddresses(userId)

        if (!addr) throw new Error(createErrorResponse(400, 'Could not find address'))
        
        res.status(200).json(createSuccessResponse({addresses: addr}));
    } catch (e) {
        logger.error({e}, 'Error adding address')
        res.status(400).json(e)
        
    }
}