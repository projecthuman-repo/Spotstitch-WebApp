const { ProductInventory } = require('../../../../model');
const logger = require('../../../../logger');
const { createErrorResponse } = require('../../../../response');


module.exports = async (req, res) => {
    try {

        const { userId } = req.params

        // add validation here

        const inv = ProductInventory.createProductInventory(userId)
        if (!inv) throw new Error('Could not create inventory')

        res.status(201).json(inv);
    } catch (e) {
        logger.error({ e }, e.message)
        res.status(400).json(e)

    }
}