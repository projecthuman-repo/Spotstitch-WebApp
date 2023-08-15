const { Product } = require("../../../model")
const logger = require('../../../logger')
module.exports = async (req, res) => {
    try {
        const { userId } = req.body
        const products = await Product.getProducts(userId)
        res.status(201).json(products);
    } catch (e) {
        logger.error({ e }, e.message)
        res.status(400).json(e)
    }
}