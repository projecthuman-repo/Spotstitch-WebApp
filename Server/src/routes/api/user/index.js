const express = require('express');
const router = express.Router();
const login = require('./login');
const register = require('./register');
const update = require('./update');
const deleteUser = require('./delete');
const createCrossEvent = require('./createCrossEvent');
const readAllCrossEvents = require('./readAllCrossEvents');
const { verifyToken } = require('../../../authorization/auth');

// creating user
router.post('/register', register);

// login user
router.post('/login', login);

// update user
router.put('/:id', verifyToken, update);

// delete user
router.delete('/:id', verifyToken, deleteUser);

// test route
router.post('/createCrossEvent', createCrossEvent);

// test route
router.get('/readAllCrossEvents', readAllCrossEvents);

module.exports = router;
