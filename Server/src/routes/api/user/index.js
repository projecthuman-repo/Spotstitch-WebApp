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
const updateDetails = require('./updateDetails');
const viewProfile = require('./viewProfile');
const viewProfilebyId = require('./viewProfilebyId');

// get user profile
router.get('/profile', verifyToken, getProfile)

// gets other user profile (some searched user)
router.get('/viewProfile', viewProfile)

// gets other user profile (some searched user)
router.get('/viewProfileById', viewProfilebyId)

// creating user
router.post('/register', register);

// login user
router.post('/login', login);

// update user details
router.put('/details', verifyToken, updateDetails)

// update user image
router.put('/image', verifyToken, updateImage)

// update user type
router.put('/type', verifyToken, updateAccountType)

// update user
router.put('/:id', verifyToken, update);

// delete user
router.delete('/:id', verifyToken, deleteUser);

module.exports = router;
