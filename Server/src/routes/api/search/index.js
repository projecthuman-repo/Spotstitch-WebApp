const express = require('express');
const router = express.Router();
const searchUsers=require('./searchUsers');


router.get('/searchUsers',searchUsers)
module.exports = router
//mongodb+srv://dbadmin:t5bIj0bVJHdrXLvB@phc-cluster.sxtfgeu.mongodb.net/spotstitch?