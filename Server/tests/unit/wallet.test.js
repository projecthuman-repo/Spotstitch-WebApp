
const { Wallet } = require('../../src/model')
const mongoose = require('mongoose');

const testCard = {
    cardNum: "1111222233334444", 
    cardOwner: "card owner"
}

describe('Wallet model', () => {
    beforeAll(async () => {
        await mongoose.disconnect();
        await mongoose.connect(process.env.JEST_URI);
    })

    afterAll(async () => {
        await mongoose.disconnect();
    });

    describe('Testing card routes', () => {
        test('creating a new wallet', async () => {
            const res = await Wallet.createWallet("123")
            expect(res.userId).toEqual("123")
        })
        test('getting invalid user wallet', async () => {
            expect(await Wallet.getWallet("1")).toEqual(undefined)
        })
        test('accessing empty user wallet list', async () => {
            const res = await Wallet.getWallet("123")
            expect(res.cards.length).toEqual(0)
        })
        
        test('adding a card to the new wallet', async () => {
            const res = await Wallet.addCard("123", testCard)
            const wallet = await Wallet.getWallet("123")
            expect(wallet.cards.length).toEqual(1)
        })
        test('attempting to empty user wallet list', async () => {
            const res = await Wallet.removeCards("123")
            expect(res.cards.length).toEqual(0)
        })
        test('attempting to remove user wallet', async () => {
            const res = await Wallet.deleteWallet("123")
            expect(await Wallet.getWallet("123")).toEqual(undefined)
        })
    })
})