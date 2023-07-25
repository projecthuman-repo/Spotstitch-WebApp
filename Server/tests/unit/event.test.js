
const { Event } = require('../../src/model')
const mongoose = require('mongoose');

mongoose.connect(process.env.JEST_URI, (err) => {
    if (err) console.log(err)
    console.log('connected');
});

describe('Event model', () => {
    describe('accessing', () => {
        test('getting empty list', async () => {
            const res = await Event.getEvents()
            console.log(res)
            expect(res.length).toBe(0)
        })
    })
    describe('creation', () => {
        test('creating an event', async () => {
            const res = await Event.createEvent({ hostId: 0 })
            expect(res.hostId).toEqual("0")
        })
    })
    describe('updating', () => {
        test('', async () => {
            const res = await Event.createEvent({ hostId: 0 })
            await res.updateEvent({ hostId: 1 })
        })
    })
    describe('deleting', () => {
        test('', async () => {
            await Event.deleteAllEvents()
            mongoose.connection.close()
        })
    })

    afterAll(async () => {
        await mongoose.connection.close();
    });
})