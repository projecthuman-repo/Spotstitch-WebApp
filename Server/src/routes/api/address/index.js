

const express = require('express');
const add = require('./add');
const edit = require('./edit');
const remove = require('./remove');
const router = express.Router();

router.post('/:userId/add', add)
router.put('/:addressId/edit', edit)
router.delete('/:addressId/remove', remove)

module.exports = router
