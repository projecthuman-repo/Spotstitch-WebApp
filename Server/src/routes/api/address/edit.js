const { Address } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse, createSuccessResponse } = require('../../../response');

module.exports = async (req, res) => {
    try {
        const { addressId } = req.params
        const { address } = req.body
        const adr = await Address.getAddress(addressId)

        const newAddr = await adr.updateAddress(address)

        if (!adr) throw new Error(createErrorResponse(400, 'Could not edit address'))

        res.status(201).json(createSuccessResponse({ address: newAddr }));
    } catch (e) {
        logger.error({ e }, 'Error adding address')
        res.status(400).json(e)

    }
}