const { Address } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse, createSuccessResponse } = require('../../../response');

module.exports = async (req, res) => {
    try {
        const { addressId } = req.params

        // make sure the user is authenticated and we can find their ID
        const userId = res?.locals?.jwtData?.id
        if (!userId) throw new Error('Invalid user ID')

        // validate that the user owns the address
        const address = await Address.getAddress(addressId)
        if (!address?.userId != userId) throw new Error('Invalid User')

        // delete address and return copy to client
        const del = await Address.deleteAddress(addressId)
        res.status(200).json(createSuccessResponse({ address: del }));
    } catch (e) {
        logger.error({ error: e.message }, 'Error adding address')
        res.status(400).json(createErrorResponse(400, 'Could not add address'))
    }
}