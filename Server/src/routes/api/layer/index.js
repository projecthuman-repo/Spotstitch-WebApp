const express = require('express');


// Create a router on which to mount our API endpoints
const router = express.Router();

/**
 * Define routes for products below
 */

// get user layers
router.get('/:userId/layers')


router.get('/:layerId' )


router.post('/create')


router.put('/:layerId/update')


router.delete('/:layerId/delete')


// Export our routes
module.exports = router
