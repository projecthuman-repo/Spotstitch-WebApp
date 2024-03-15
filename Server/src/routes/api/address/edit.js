const { Address } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse, createSuccessResponse } = require('../../../response');

module.exports = async (req, res) => {
    try {

        
        const { addressId } = req.params
        const { address } = req.body

        const userId = res?.locals?.jwtData?.id
        if (!userId) throw new Error('Invalid user ID')

        const adr = await Address.getAddress(addressId)
        if (!adr) throw new Error(createErrorResponse(400, 'Could not edit address'))
        if (adr.userId != userId) throw new Error(createErrorResponse(400, 'Invalid user'))

        const newAddr = await adr.updateAddress(address)

        res.status(201).json(createSuccessResponse({ address: newAddr }));
    } catch (e) {
        logger.error({ e }, 'Error adding address')
        res.status(400).json(e)

    }
}