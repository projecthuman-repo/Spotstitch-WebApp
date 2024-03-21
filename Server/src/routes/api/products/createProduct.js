const { Product, ProductInventory, validateFields } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse, createSuccessResponse } = require('../../../response');

// create a new product and add it to the users inventory
module.exports = async (req, res) => {
    try {
        // make sure the user is authenticated and we can find their ID
        const userId = res?.locals?.jwtData?.id
        if (!userId) throw new Error('Invalid user ID')

        const { product } = req.body

        // ensure all fields required to create the model are present
        const missing = validateFields(Product.schema, product)
        if (missing) throw new Error(`Missing required fields: ${missing.toString()}`)

        // make sure the new product is created successfully
        const newProduct = await Product.createProudct(product)
        if (!newProduct) throw new Error('Could not create product')

        // check if the user has a valid product inventory
        // create a new inventory if one is not found and add the product
        const inventory =
            await ProductInventory.getInventory(userId) ||
            await ProductInventory.createProudctInventory(userId)
        await inventory.addProduct(product)

        // send back the newly created product to the user
        res.status(201).json(createSuccessResponse({ product: product }));
    } catch (e) {
        logger.error({ e }, e.message)
        res.status(400).json(createErrorResponse(400, 'Could not create product'))

    }
}