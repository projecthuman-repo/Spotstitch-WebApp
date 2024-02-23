const { Address } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse, createSuccessResponse } = require('../../../response');

module.exports = async (req, res) => {
    try {

        const { addressId } = req.params

        const del = await Address.deleteAddress(addressId)
        res.status(200).json(createSuccessResponse({ address: del }));
    } catch (e) {
        logger.error({ e }, 'Error adding address')
        res.status(400).json(e)

    }
}