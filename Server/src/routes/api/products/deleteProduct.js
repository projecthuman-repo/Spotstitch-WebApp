const { Product, ProductInventory } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse, createSuccessResponse } = require('../../../response');

// deleting a product from a users inventory
module.exports = async (req, res) => {
    try {
        // make sure the user is authenticated and we can find their ID
        const userId = res?.locals?.jwtData?.id
        if (!userId) throw new Error('Invalid user ID')

        const { productId } = req.params

        // try to find product based on product id
        // make sure the user owns the product they are removing
        const product = await Product.getProduct(productId)
        if (!product) throw new Error('Could not find product')
        if (product.sellerId != userId) throw new Error('User does not own the product')

        // remove product from inventory
        const inventory = await ProductInventory.getInventory(userId) 
        await inventory.deleteProduct(productId)

        res.status(201).json(createSuccessResponse({product: product}));
    } catch (e) {
        logger.error({ e }, e.message)
        res.status(400).json(createErrorResponse(400, 'Could not delete product'))

    }
}