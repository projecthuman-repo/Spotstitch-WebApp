const{ Address } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse, createSuccessResponse } = require('../../../response');

module.exports = async (req, res) => {
    try {
        const userId = res?.locals?.jwtData?.id
        if (!userId) throw new Error('Invalid user ID')
        
        const address = req.body
        const info = {
            ...address,
            userId: userId
        }

        const addr = await Address.createAddress(info)
       
        if (!addr) throw new Error(createErrorResponse(400, 'Could not create address'))
        res.status(201).json(createSuccessResponse({address: addr}));
    } catch (e) {
        logger.error({e}, 'Error adding address')
        res.status(400).json(e)
        
    }
}