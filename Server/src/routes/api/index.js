const express = require('express');
const { verifyToken } = require('../../authorization/auth');
const router = express.Router();

router.use('/user', require('./user'))
router.use('/users', require('./searchUsers'))
router.use('/products', verifyToken, require('./products'))
router.use('/address', verifyToken, require('./address'))
router.use('/chat', verifyToken, require('./chat'))
router.use('/events', verifyToken, require('./events'))
router.use('/posts', verifyToken, require('./posts'))
router.use('/inventory', verifyToken, require('./inventory'))
router.use('/wallet', verifyToken, require('./wallet'))
router.use('/settings', verifyToken, require('./settings'))

module.exports = router