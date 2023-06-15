const mongoose = require('mongoose');

const WalletSchema = new mongoose.Schema({
    userID, 
    cards: [{
        cardNum: String,
        cardOwner: String
    }]
})

const Wallet = mongoose.model('Wallet', WalletSchema);

module.exports = Wallet
