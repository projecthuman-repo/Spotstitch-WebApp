const express = require('express');
const router = express.Router();
const login = require('./login');
const register = require('./register');

// creating user
router.post('/register', register)

// login user
router.post('/login', login)


module.exports = router
