const express = require('express');
const router = express.Router();
const login = require('./login');
const register = require('./register');
const update = require('./update');
const deleteUser = require('./delete');
const { verifyToken } = require('../../../authorization/auth');
const getProfile = require('./getProfile');
const updateImage = require('./updateImage');
const updateAccountType = require('./updateAccountType');
const updateFirstName = require('./updateFirstName');
const updateLastName = require('./updateLastName');
// const updateDisplayName = require('./updateDisplayName');

// get user profile
router.get('/profile', verifyToken, getProfile)

// creating user
router.post('/register', register);

// login user
router.post('/login', login);

// update user display name
// router.put('/displayName', verifyToken, updateDisplayName)

// update user first name
router.put('/firstName', verifyToken, updateFirstName)

// update user last name
router.put('/lastName', verifyToken, updateLastName)

// update user image
router.put('/image', verifyToken, updateImage)

// update user type
router.put('/type', verifyToken, updateAccountType)

// update user
router.put('/:id', verifyToken, update);

// delete user
router.delete('/:id', verifyToken, deleteUser);

module.exports = router;
