const mongoose = require('mongoose');

const WalletSchema = new mongoose.Schema({
    userId: String,
    cards: [{
        cardNumber: String,
        cardOwner: String
    }]
})


WalletSchema.statics.createWallet = async (userId) => {
    try {
        const res = await Wallet.getWallet(userId)
        if (res) throw new Error(`Wallet already exists for: ${userId}`)
        const wallet = new Wallet({ userId: userId, cards: [] })
        wallet.save()
        return wallet
    } catch (err) {
        throw new Error(err)
    }
}

WalletSchema.statics.getWallet = async (userID) => {
    try {
        const wallet = await Wallet.findOne({ userId: userID })
        if (wallet) return wallet
        else return undefined
    } catch (err) {
        throw new Error(err)
    }
}

WalletSchema.statics.addCard = async function(userId, card = { cardNum: '', cardOwner: '' }) {
    try {
        const wallet = await Wallet.getWallet(userId)
        wallet.cards.push(card)
        await wallet.save()
        return wallet
    } catch (err) {
        throw new Error(err)
    }
}

WalletSchema.statics.removeCards = async function(userId) {
    try {
        const wallet = await Wallet.getWallet(userId)
        wallet.cards = []
        await wallet.save()
        return wallet
    } catch (err) {
        throw new Error(err)
    }
}

WalletSchema.statics.deleteWallet = async function(userId) {
    try {
        const wallet = await Wallet.findOneAndDelete({ userId: userId })
        return wallet
    } catch (err) {
        throw new Error(err)
    }
}

WalletSchema.methods.removeCard = async function(idx) {
    try {
        this.cards.splice(idx, 1)
        await this.save()
    } catch (err) {
        throw new Error(err)
    }
}

WalletSchema.methods.preview = async function() {
    try {
        const cards = []
        for (const c of this.cards) {
            cards.push(c.slice(-4))
        }
        return cards
    } catch (err) {
        throw new Error(err)
    }
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
