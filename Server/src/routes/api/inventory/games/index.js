const express = require('express');
const getGameInv = require('./getGameInv');
const createGamesInv = require('./createGamesInv');
const addGame = require('./addGame');
const removeGame = require('./removeGame');


// Create a router on which to mount our API endpoints
const router = express.Router();

/**
 * Define routes for products below
 */

router.get('/:userId', getGameInv)

router.post('/create/:userId', createGamesInv)

router.post('/add/:userId/:productId', addGame)

router.delete('/delete/:userId/:productId', removeGame)

// Export our routes
module.exports = router
