const express = require('express');
const router = express.Router();
const login = require('./api/user/login');
const register = require('./api/user/register');

// creating user
router.post('/', register)

// login user
router.post('/login', login)


module.exports = router
