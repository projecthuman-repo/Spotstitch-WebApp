const express = require('express');
const getLayer = require('./getLayer');
const getAllLayers = require('./getAllLayers');
const createLayer = require('./createLayer');
const deleteLayer = require('./deleteLayer');
const updateLayer = require('./updateLayer');


// Create a router on which to mount our API endpoints
const router = express.Router();

/**
 * Define routes for products below
 */

// get all layers
router.get('/all', getAllLayers)


router.get('/:layerId', getLayer)


router.post('/create', createLayer)


router.put('/:layerId/update', updateLayer)


router.delete('/:layerId/delete', deleteLayer)


// Export our routes
module.exports = router
