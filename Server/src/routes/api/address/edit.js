const{ Address } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse } = require('../../../response');

module.exports = async (req, res) => {
    try {
        const { addressId } = req.params
        const { address } = req.body
        const adr = await Address.getAddress(addressId)

        adr.updateAddress(address)
        
        if (!adr) throw new Error(createErrorResponse(400, 'Could not edit address'))
       
        res.status(201).json();
    } catch (e) {
        logger.error({e}, 'Error adding address')
        res.status(400).json(e)
        
    }
}