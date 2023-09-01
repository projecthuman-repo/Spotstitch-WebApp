const express = require('express');
const editMessage = require('./editMessage');
const sendMessage = require('./sendMessage');
const getChat = require('./getChat');
const deleteMessage = require('./deleteMessage');
const router = express.Router();

router.get('/:chatId', getChat)
router.put('/message/:messageId/edit', editMessage)
router.post('/message/send', sendMessage)
router.delete('/message/:messageId/delete', deleteMessage)

module.exports = router
