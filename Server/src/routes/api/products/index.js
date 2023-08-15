const express = require('express');
const allProducts = require('./allProducts');
const getProduct = require('./getProduct');
const createProduct = require('./createProduct');

// Create a router on which to mount our API endpoints
const router = express.Router();

/**
 * Define routes for products below
 */

router.get('/:id', getProduct)

// get all products
router.get('/all', allProducts)

// create new product
router.post('/create', createProduct)

// update existing product
router.put('/update')

// delete existing product
router.delete('/delete')

// Export our routes
module.exports = router
