const { Product } = require("../../../model")
const logger = require('../../../logger')
module.exports = async (req, res) => {
    try {
        const products = await Product.getProducts()
        return products
    } catch (err) {
        logger.error({err}, 'Could not fetch products')
    }
}