const express = require('express');


// Create a router on which to mount our API endpoints
const router = express.Router();

/**
 * Define routes for products below
 */

router.use('/game', require('./games'))
router.use('/products', require('./products'))

// Export our routes
module.exports = router
