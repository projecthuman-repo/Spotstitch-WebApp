const mongoose = require('mongoose');

const WalletSchema = new mongoose.Schema({
    userID: String, 
    cards: [{
        cardNum: String,
        cardOwner: String
    }]
})

WalletSchema.methods.getSpotstitchWallet = (userID) => {}
WalletSchema.methods.createSpotstitchWallet = (userInput) => {}
WalletSchema.methods.updateSpotstitchWallet = (userInput) => {}
WalletSchema.methods.deleteSpotstitchWallet = (walletID) => {}

const Wallet = mongoose.model('Wallet', WalletSchema);

module.exports = Wallet
