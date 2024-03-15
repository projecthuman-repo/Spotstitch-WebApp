const { Product } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse, createSuccessResponse } = require('../../../response');


// get a product based on product id
module.exports = async (req, res) => {
    try {
        const { productId } = req.params

        // search for product with the product id 
        const product = await Product.getProduct(productId)
        if (!product) throw new Error('Could not find existing product')

        // send back the matching product found
        res.status(200).json(createSuccessResponse({ product: product }));
    } catch (e) {
        logger.error({ e }, e.message)
        res.status(400).json(createErrorResponse(400, 'Could not find existing product'))
    }
}