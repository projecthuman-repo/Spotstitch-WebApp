const express = require('express');
const router = express.Router();

router.use('/user', require('./user'))
router.use('/prodcuts', require('./products'))
//router.use('/events')
//router.use('/posts')

module.exports = router