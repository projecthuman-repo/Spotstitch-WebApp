
const { Address } = require('../../src/model')
const mongoose = require('mongoose');

const addr = {
    userId: "1",
    addressLines: ["34 test road"],
    city: "test city",
    province: "ontario",
    country: "canada",
    postalCode: "M1T3S7"
}

describe('Address model', () => {
    beforeAll(async () => {
        await mongoose.connect(process.env.JEST_URI);
    })

    afterAll(async () => {
        await mongoose.connection.close();
    });
    describe('creation', () => {
        test('creating an Address', async () => {
            const res = await Address.createAddress(addr)
            console.log(res)
            expect(res.userId).toEqual("1")
            expect(res.addressLines.length).toBe(1)
            expect(res.city).toBe("test city")
        })
    })
    describe('accessing', () => {
        test('getting empty list', async () => {
            const res = await Address.getUserAddresses(0)
            expect(res.length).toBe(0)
        })
        test('get single address from id', async () => {
            const id = 1
            const res = await Address.getAddress(id)
            expect(res.length).toBe(0)
        })
        test('get user address list', async () => {
            const res = await Address.getUserAddresses(1)
            expect(res.length).toBe(1)
        })
    })
    describe('updating', () => {
        test('', async () => {
            expect(1).toEqual(1)
        })
    })
    describe('deleting', () => {
        test('', async () => {
            expect(1).toEqual(1)
        })
    })
})