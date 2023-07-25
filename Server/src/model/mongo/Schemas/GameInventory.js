const mongoose = require('mongoose');

const GameInventorySchema = new mongoose.Schema({ 
    userID: String, 
    gameIds: [String]
})

const GameInventory = mongoose.model('GameInventory', GameInventorySchema);

module.exports = GameInventory
