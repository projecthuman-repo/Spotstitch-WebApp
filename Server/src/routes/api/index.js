const express = require('express');
const router = express.Router();

router.use('/user', require('./user'))
router.use('/events')
router.use('/posts')

module.exports = router