const { Address, validateFields } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse, createSuccessResponse } = require('../../../response');

module.exports = async (req, res) => {
    try {
        const userId = res?.locals?.jwtData?.id
        if (!userId) throw new Error('Invalid user ID')
        
        const { addressId } = req.params
        const { address } = req.body
        address.userId = userId

        // validate data sent by client, ensure all fields are valid
        const missing = validateFields(Address.schema, address)
        if (missing) throw new Error(`Missing required fields: ${missing.toString()}`)

        // attempt to find address
        const adr = await Address.getAddress(addressId)
        if (!adr) throw new Error(createErrorResponse(400, 'Could not find address'))
        if (adr.userId != userId) throw new Error(createErrorResponse(400, 'Invalid user'))

        const newAddr = await adr.updateAddress(address)

        res.status(201).json(createSuccessResponse({ address: newAddr }));
    } catch (e) {
        logger.error({ error: e.message }, 'Could not edit address')
        res.status(400).json(createErrorResponse(400, 'Could not edit address'))
    }
}