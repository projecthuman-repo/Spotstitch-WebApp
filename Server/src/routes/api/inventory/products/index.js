const express = require('express');
const getProductInv = require('./getProductInv');
const createProductInv = require('./createProductInv');
const removeProduct = require('./removeProduct');
const addProduct = require('./addProduct');


// Create a router on which to mount our API endpoints
const router = express.Router();

/**
 * Define routes for products below
 */

// get user product inventory
router.get('/:userId', getProductInv)

router.post('/:userId/create', createProductInv)

router.post('/:userId/add/:productId', addProduct)

router.delete('/:userId/delete/:productId', removeProduct)

// Export our routes
module.exports = router
