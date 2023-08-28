const { Product } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse } = require('../../../response');

module.exports = async (req, res) => {
    try {
        const { productId } = req.params

        const product = await Product.getProduct(productId)
        if (!product) throw new Error(createErrorResponse(400, 'Could not find existing product'))

        res.status(201).json(product);
    } catch (e) {
        logger.error({ e }, e.message)
        res.status(400).json(e)

    }
}