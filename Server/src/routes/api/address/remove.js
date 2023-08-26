const{ Address } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse } = require('../../../response');

module.exports = async (req, res) => {
    try {
        
        const { addressId } = req.body
        const adr = Address.getAddress(addressId)

        adr.deleteAddress()
        res.status(201).json();
    } catch (e) {
        logger.error({e}, 'Error adding address')
        res.status(400).json(e)
        
    }
}