const express = require('express');
const allProducts = require('./allProducts');
const getProduct = require('./getProduct');
const createProduct = require('./createProduct');
const deleteProduct = require('./deleteProduct');
const editProduct = require('./editProduct')
// Create a router on which to mount our API endpoints
const router = express.Router();

/**
 * Define routes for products below
 */

router.get('/:productId', getProduct)

// get all products
router.get('/all', allProducts)

// create new product
router.post('/create', createProduct)

// update existing product
router.put('/:productId/edit', editProduct)

// delete existing product
router.delete('/:productId/delete', deleteProduct)

// Export our routes
module.exports = router
