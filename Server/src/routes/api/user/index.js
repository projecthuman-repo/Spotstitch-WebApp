const express = require('express');
const router = express.Router();
const login = require('./login');
const register = require('./register');
const update = require('./update');
const deleteUser = require('./delete');
const { verifyToken } = require('../../../authorization/auth');

// creating user
router.post('/register', register);

// login user
router.post('/login', login);

// update user
router.put('/:id', verifyToken, update);

// delete user
router.delete('/:id', verifyToken, deleteUser);

module.exports = router;
