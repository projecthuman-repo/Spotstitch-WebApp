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
<<<<<<< Updated upstream
// const updateDisplayName = require('./updateDisplayName');
=======
const updateBanner = require('./updateBanner');
const updateWebsite = require('./updateWebsite');
const updateBio = require('./updateBio');
>>>>>>> Stashed changes

// get user profile
router.get('/profile', verifyToken, getProfile)

// creating user
router.post('/register', register);

// login user
router.post('/login', login);

<<<<<<< Updated upstream
// update user display name
// router.put('/displayName', verifyToken, updateDisplayName)

=======
>>>>>>> Stashed changes
// update user first name
router.put('/firstName', verifyToken, updateFirstName)

// update user last name
router.put('/lastName', verifyToken, updateLastName)

// update user image
router.put('/image', verifyToken, updateImage)

// update user banner image
router.put('/banner', verifyToken, updateBanner)

// update user bio
router.put('/website', verifyToken, updateBio)

// update user website
router.put('/website', verifyToken, updateWebsite)

// update user type
router.put('/type', verifyToken, updateAccountType)

// update user
router.put('/:id', verifyToken, update);

// delete user
router.delete('/:id', verifyToken, deleteUser);

module.exports = router;
