const { Product, ProductInventory } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse } = require('../../../response');

module.exports = async (req, res) => {
    try {
        const { productId } = req.params
        const { userId } = req.body

        const product = await Product.getProduct(productId)
        if (!product) throw new Error('Could not find product')

        const inventory = await ProductInventory.getInventory(userId) 
        await inventory.deleteProduct(productId)

        res.status(201).json(product);
    } catch (e) {
        logger.error({ e }, e.message)
        res.status(400).json(e)

    }
}