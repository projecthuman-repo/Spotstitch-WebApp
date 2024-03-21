const { Product } = require("../../../model")
const logger = require('../../../logger')
const { createErrorResponse, createSuccessResponse } = require("../../../response")

// get all products
module.exports = async (req, res) => {
    try {
        // attemp to get all products
        const products = await Product.getProducts()
        if (!products) throw new Error('Could not fetch products')

        res.status(200).json(createSuccessResponse({ products: products }));
    } catch (e) {
        logger.error({ e }, e.message)
        res.status(400).json(createErrorResponse(e.message))
    }
}