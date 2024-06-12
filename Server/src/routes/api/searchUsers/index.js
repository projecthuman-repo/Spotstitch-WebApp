const express = require('express');
const router = express.Router();
const searchUsers = require('./searchUsers');

// get user profile
router.get('/findOne/', searchUsers)

module.exports = router;
