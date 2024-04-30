const mongoose = require('mongoose');
const logger = require('../../../logger');

const WalletSchema = new mongoose.Schema({
    userId: {
        type: String,
        unique: true,
        required: true,
        select: false
    },
    cards: [{
        cardNumber: { type: String, required: true },
        cardOwner: { type: String, required: true },
        cardExpiry: { type: String },
        cardType: { type: String }, // add required when verifcation added
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
        if (wallet) { return wallet }
        else return undefined
    } catch (err) {
        throw new Error(err)
    }
}

WalletSchema.methods.addCard = async function (card = { cardNumber: '', cardOwner: '', cardType: '' }) {
    try {
        // make sure the card doesn't already exist
        let exists = false;
        this.cards.map((walletCard) => {
            if (walletCard.cardNumber == card.cardNumber) {
                exists = true
            }
        })
        if (exists) throw new Error('Card already exists')
        this.cards.push(card)
        // note - the card information should be hashed for security
        // card should also be verified by their specific type
        // add hash and verification here
        await this.save()
        return this
    } catch (error) {
        logger.error({}, error.message)
    }
}

WalletSchema.statics.removeCards = async function (userId) {
    try {
        const wallet = await Wallet.getWallet(userId)
        wallet.cards = []
        await wallet.save()
        return wallet
    } catch (err) {
        throw new Error(err)
    }
}

WalletSchema.statics.deleteWallet = async function (userId) {
    try {
        const wallet = await Wallet.findOneAndDelete({ userId: userId })
        return wallet
    } catch (err) {
        throw new Error(err)
    }
}

WalletSchema.methods.removeCard = async function (idx) {
    try {
        this.cards.splice(idx, 1)
        await this.save()
        return this
    } catch (err) {
        throw new Error(err)
    }
}

WalletSchema.methods.preview = function () {
    try {
        const cards = []
        for (const c of this.cards) {
            cards.push({
                cardNumber: c.cardNumber.slice(-4),
                cardType: c.cardType
            })
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
