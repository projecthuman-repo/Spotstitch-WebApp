const { Product, ProductInventory } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse } = require('../../../response');

module.exports = async (req, res) => {
    try {
        const { productId } = req.body

        const product = await Product.getProduct(productId)
        if (!product) throw new Error('Could not find product')

        res.status(201).json(product);
    } catch (e) {
        logger.error({ e }, e.message)
        res.status(400).json(e)

    }
}