const { Product, validateFields } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse, createSuccessResponse } = require('../../../response');

// edit a existing product in the users inventory
module.exports = async (req, res) => {
    try {
        // make sure the user is authenticated and we can find their ID
        const userId = res?.locals?.jwtData?.id
        if (!userId) throw new Error('Invalid user ID')

        const { productId } = req.params
        const { product } = req.body

        // ensure all fields required to create the model are present
        const missing = validateFields(Product.schema, product)
        if (missing) throw new Error(`Missing required fields: ${missing.toString()}`)

        // make sure the product exists and the user owns the product
        const edit = await Product.getProduct(productId)
        if (!edit) throw new Error('Could not find product')
        if (edit.sellerId != userId) throw new Error('User does not own the product')

        const response = edit.updateProduct(product)

        res.status(201).json(createSuccessResponse({ product: response }));
    } catch (e) {
        logger.error({ e }, e.message)
        res.status(400).json(createErrorResponse(400, 'Could not edit product'))

    }
}