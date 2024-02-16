const express = require('express');
const getSettings = require('./getSettings');
const updateSettings = require('./updateSettings');
const router = express.Router();

router.get('/:userId', getSettings)
router.post('/update/:userId', updateSettings)

module.exports = router
