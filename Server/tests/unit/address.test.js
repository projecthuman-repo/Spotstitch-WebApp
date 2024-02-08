
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

const newAddr = {
    userId: "1",
    addressLines: ["43 test blv"],
    city: "other",
    province: "montreal",
    country: "canada",
    postalCode: "M1T3S7"
}

describe('Address model', () => {
    beforeAll(async () => {
        await mongoose.disconnect();
        await mongoose.connect(process.env.JEST_URI);
    })

    afterAll(async () => {
        await mongoose.disconnect();
    });
    describe('creation', () => {
        test('creating an Address', async () => {
            await Address.createAddress(addr)
            const res = await Address.getUserAddresses(1)
            expect(res[0].userId).toEqual(addr.userId)
            expect(res[0].addressLines).toEqual(addr.addressLines)
            expect(res[0].city).toEqual(addr.city)
            expect(res[0].province).toEqual(addr.province)
            expect(res[0].country).toEqual(addr.country)
            expect(res[0].postalCode).toEqual(addr.postalCode)
        })
    })
    describe('accessing', () => {
        test('getting empty list', async () => {
            const res = await Address.getUserAddresses(0)
            expect(res.length).toBe(0)
        })
        test('get user address list', async () => {
            const res = await Address.getUserAddresses(1)
            expect(res.length).toBe(1)
        })
        test('get single address from id', async () => {
            const id = await Address.getUserAddresses(1)
            const res = await Address.getAddress(id[0]._id)
            expect(res.userId).toBe(addr.userId)
        })
    })
    describe('updating', () => {
        test('update existing address', async () => {
            const id = await Address.getUserAddresses(1)
            await Address.updateAddress(id[0]._id, newAddr)
            const res = await Address.getAddress(id[0]._id)
            expect(res.userId).toEqual(newAddr.userId)
            expect(res.addressLines).toEqual(newAddr.addressLines)
            expect(res.city).toEqual(newAddr.city)
            expect(res.province).toEqual(newAddr.province)
            expect(res.country).toEqual(newAddr.country)
            expect(res.postalCode).toEqual(newAddr.postalCode)
        })
    })
    describe('deleting', () => {
        test('delete all addresses', async () => {
            await Address.createAddress(addr)
            await Address.createAddress(addr)
            await Address.createAddress(addr)
            const res = await Address.getUserAddresses(1)
            expect(res.length).toEqual(4)

            for (const address of res) {

                await Address.deleteAddress(address._id)
            }
            const result = await Address.getUserAddresses(1)
            expect(result.length).toBe(0)
        })
    })
})