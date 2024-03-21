const express = require('express');
const router = express.Router();

const add = require('./add');
const remove = require('./remove');
const get = require('./get')

// get user wallet
router.post('/', get)

// add card to wallet
router.post('/add', add)

// remove card from wallet
router.delete('/remove/:index', remove)


module.exports = router
