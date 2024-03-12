const express = require('express');
const getSettings = require('./getSettings');
const updateSettings = require('./updateSettings');
const router = express.Router();

router.get('/:userId', getSettings)
router.post('/:userId/update', updateSettings)

module.exports = router
