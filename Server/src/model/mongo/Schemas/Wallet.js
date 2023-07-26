const mongoose = require('mongoose');

const WalletSchema = new mongoose.Schema({
    userId: String,
    cards: [{
        cardNum: String,
        cardOwner: String
    }]
})


WalletSchema.statics.createWallet = async (userId) => {
    try {
        const wallet = new Wallet({ userId: userId, cards: [] })
        wallet.save()
        return wallet
    } catch (err) {
        throw new Error(err)
    }
}

WalletSchema.statics.getUserWallet = async (userID) => {
    try {
        const wallet = await Wallet.findOne({ userID }).exec()
        return wallet
    } catch (err) {
        console.log(err)
        throw new Error('Could not fetch wallet')
    }
}

WalletSchema.methods.addCard = async function(card = { cardNum: '', cardOwner: '' }) {
    try {
        this.cards.push(card)
    } catch (err) {
        throw new Error(err)
    }
}

WalletSchema.methods.removeCard = async function() {

}

const Wallet = mongoose.model('Wallet', WalletSchema);

/* short test
const test = async () => {
    const uri = 'mongodb://127.0.0.1:27017/PHC-test'
    mongoose.connect(uri, (err) => {
        console.log('connected');
    });
    try {
        const t1 = await Wallet.addCard('test123123', { cardNum: '12311231', cardOwner: 'bob' })
        const t2 = await Wallet.addCard('test123123', { cardNum: '12311232', cardOwner: 'bob' })
    } catch (err) {
        console.log(err)
    }
    
    const w1 = await Wallet.getUserWallet('test123123')
}

test()
*/
module.exports = Wallet
