const express = require('express');
const getSettings = require('./getSettings');
const updateSettings = require('./updateSettings');
const router = express.Router();

router.get('/', getSettings)
router.post('/update', updateSettings)

module.exports = router
