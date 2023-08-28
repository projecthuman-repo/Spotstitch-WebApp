const express = require('express');
const getAllEvents = require('./getAllEvents');
const getEvent = require('./getEvent');
const hostEvent = require('./hostEvent');
const cancelEvent = require('./cancelEvent');
const updateEvent = require('./updateEvent');


// Create a router on which to mount our API endpoints
const router = express.Router();

/**
 * Define routes for products below
 */

// get all events
router.get('/all', getAllEvents)

// get event by id
router.get('/:eventId', getEvent)

// create new event
router.post('/create', hostEvent)

// update existing event 
router.put('/:eventId/update', updateEvent)

// delete existing event
router.delete('/:eventId/cancel', cancelEvent)


// Export our routes
module.exports = router
