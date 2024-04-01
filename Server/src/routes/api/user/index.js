const express = require('express');
const router = express.Router();
const login = require('./login');
const register = require('./register');
const update = require('./update');
const deleteUser = require('./delete');
const createCrossEvent = require('./createCrossEvent');
const readAllCrossEvents = require('./readAllCrossEvents');
const readAllEvents = require('./readAllEvents');
const getCrossEvent = require('./getCrossEvent');
const deleteCrossEvent = require('./deleteCrossEvent');
const updateBothEvents = require('./updateBothEvents');
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

// test route
router.get('/readAllEvents', readAllEvents);

// get one cross plat even
router.get('/getCrossEvent/:id', getCrossEvent);

// delete a cross plat event
router.delete('/deleteCrossEvent/:eventId', deleteCrossEvent);

// update both crossplat and spotstitch instances of an event
router.put('/updateBothEvents/:eventId', updateBothEvents);

module.exports = router;
