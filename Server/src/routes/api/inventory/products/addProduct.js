const { ProductInventory } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse } = require('../../../response');


module.exports = async (req, res) => {
    try {

        const { userId, productId  } = req.params
        // add validation here

        const inv = ProductInventory.getProductInventory(userId)
        if (!inv) throw new Error('Could not find inventory')

        inv.addProduct(productId)

        res.status(201).json(inv);
    } catch (e) {
        logger.error({ e }, e.message)
        res.status(400).json(e)

    }
}