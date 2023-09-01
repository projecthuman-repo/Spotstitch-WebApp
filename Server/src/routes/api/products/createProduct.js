const { Product, ProductInventory } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse } = require('../../../response');

module.exports = async (req, res) => {
    try {
        const { productInfo, userId } = req.body

        const product = await Product.createProudct(productInfo)
        if (!product) throw new Error('Could not create product')

        const inventory =
            await ProductInventory.getInventory(userId) ||
            await ProductInventory.createProudctInventory(userId)
        await inventory.addProduct(product)

        res.status(201).json(product);
    } catch (e) {
        logger.error({ e }, e.message)
        res.status(400).json(e)

    }
}