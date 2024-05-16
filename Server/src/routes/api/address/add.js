const { Address, validateFields } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse, createSuccessResponse } = require('../../../response');

module.exports = async (req, res) => {
    try {
        // make sure the user is authenticated and we can find their ID
        const userId = res?.locals?.jwtData?.id
        if (!userId) throw new Error('Invalid user ID')

        const { address } = req.body
        address.userId = userId

        // ensure all fields required to create an event are present
        const missing = validateFields(Address.schema, address)
        if (missing.length > 0) throw new Error(`Missing required fields: ${missing.toString()}`)

        // Make sure address is completed properly
        const addr = await Address.createAddress(address)
        if (!addr) throw new Error('Error creating address')

        res.status(201).json(createSuccessResponse({ address: addr }));
    } catch (e) {
        logger.error({ error: e.message }, 'Error adding address')
        res.status(400).json(createErrorResponse(400, 'Could not create address'))
    }
}