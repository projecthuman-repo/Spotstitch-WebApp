

const express = require('express');
const get = require('./get')
const add = require('./add');
const edit = require('./edit');
const remove = require('./deleteAddress');
const router = express.Router();

router.get('/:userId/get', get)
router.post('/:userId/add', add)
router.put('/:addressId/edit', edit)
router.delete('/:addressId/delete', remove)

module.exports = router
