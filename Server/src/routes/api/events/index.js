const express = require('express');
const getAllEvents = require('./getAllEvents');
const getEvent = require('./getEvent');


// Create a router on which to mount our API endpoints
const router = express.Router();

/**
 * Define routes for products below
 */

// get all events
router.get('/all', getAllEvents)

// get event by id
router.get('/:id', getEvent)


// create new product
router.post('/create')

// update existing product
router.put('/update')

// delete existing product
router.delete('/delete')


// Export our routes
module.exports = router
