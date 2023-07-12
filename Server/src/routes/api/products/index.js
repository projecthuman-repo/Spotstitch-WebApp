const express = require('express');
const all = require('./all');

// Create a router on which to mount our API endpoints
const router = express.Router();

/**
 * Define routes for products below
 */

// get all products
router.get('/all', all)

// create new product
router.post('/create')

// update existing product
router.put('/update')

// delete existing product
router.delete('/delete')

// Export our routes
module.exports = router
