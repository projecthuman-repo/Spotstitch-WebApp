

const express = require('express');
const add = require('./add');
const edit = require('./edit');
const remove = require('./remove');
const router = express.Router();

router.post('/add', add)
router.put('./edit', edit)
router.delete('./remove', remove)

module.exports = router
