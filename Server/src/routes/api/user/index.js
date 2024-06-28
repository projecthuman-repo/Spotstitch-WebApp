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
const updateUsername = require('./updateUsername');
const updateBanner = require('./updateBanner');
const updateWebsite = require('./updateWebsite');
const updateBio = require('./updateBio');
const updateFollow = require('./updateFollow');

// get user profile
router.get('/profile', verifyToken, getProfile)

// creating user
router.post('/register', register);

// login user
router.post('/login', login);

// update user first name
router.put('/firstName', verifyToken, updateFirstName)

// update user last name
router.put('/lastName', verifyToken, updateLastName)

// update user username
router.put('/username', verifyToken, updateUsername)

// update user image
router.put('/image', verifyToken, updateImage)

// update user banner image
router.put('/banner', verifyToken, updateBanner)

// update user bio
router.put('/website', verifyToken, updateBio)

// update user website
router.put('/website', verifyToken, updateWebsite)

//update user following and followers
router.put('/follow', verifyToken, updateFollow)

// update user type
router.put('/type', verifyToken, updateAccountType)

// update user
router.put('/:id', verifyToken, update);

// delete user
router.delete('/:id', verifyToken, deleteUser);

module.exports = router;
