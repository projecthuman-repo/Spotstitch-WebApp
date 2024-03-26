const express = require('express');
// const getCrossEvent = require('./getCrossEvent');
const getAllCrossEvents = require('./getAllCrossEvents');

const router = express.Router();

router.get('/all', getAllCrossEvents)

module.exports = router