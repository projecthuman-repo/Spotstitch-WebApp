const express = require('express');
const router = express.Router();

router.use('/user', require('./user'))
router.use('/products', require('./products'))
router.use('/address', require('./address'))
router.use('/chat', require('./chat'))
router.use('/events', require('./events'))
router.use('/posts', require('./posts'))
router.use('/inventory', require('./inventory'))
router.use('/wallet', require('./wallet'))


module.exports = router