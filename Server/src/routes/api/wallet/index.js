const express = require('express');
const router = express.Router();

const add = require('./add');
const remove = require('./remove');

// add card to wallet
router.post('/add', add)

// remove card from wallet
router.delete('/remove', remove)


module.exports = router
