const mongoose = require('mongoose');

const GameInventorySchema = new mongoose.Schema({ 
    userID: String, 
    games: [String]
})

GameInventorySchema.statics.createProductInventory = async (userId) => {
    try {
        const inv = new GameInventory({userId: userId, games: []})
        await inv.save()
    } catch (err) {
        throw new Error(err)
    }
}

GameInventorySchema.methods.addGame = async function(gameId) {
    try {
        this.games.push(gameId)
        await this.save()
    } catch (err) {
        throw new Error(err)
    }
}

GameInventorySchema.methods.removeGame = async function(gameId) {
    try {
        this.games.splice(this.games.indexOf(gameId), 1);
        await this.save()
    } catch (err) {
        throw new Error(err)
    }
}

const GameInventory = mongoose.model('GameInventory', GameInventorySchema);

module.exports = GameInventory
