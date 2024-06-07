const express = require('express');
const router = express.Router();
const searchUsers = require('./searchUsers');

// get user profile
router.get('/users', searchUsers)

module.exports = router;
