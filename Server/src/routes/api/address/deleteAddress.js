const { Address } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse, createSuccessResponse } = require('../../../response');

module.exports = async (req, res) => {
    try {

        const { addressId } = req.params
        
        const userId = res?.locals?.jwtData?.id
        if (!userId) throw new Error('Invalid user ID')

        const address = await Address.getAddress(addressId)
        if (!address?.userId != userId) throw new Error('Invalid User')

        const del = await Address.deleteAddress(addressId)
        res.status(200).json(createSuccessResponse({ address: del }));
    } catch (e) {
        logger.error({ e }, 'Error adding address')
        res.status(400).json(e)

    }
}