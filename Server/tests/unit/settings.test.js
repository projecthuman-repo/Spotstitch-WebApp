
const { Settings } = require('../../src/model')
const mongoose = require('mongoose');

const defaultSettings = {
    userId: '1',
    general: {
        messages: {
            anyone: { type: Boolean, default: true },
            friends: { type: Boolean, default: true },
            friendsOfFriends: { type: Boolean, default: true },
            trades: { type: Boolean, default: true },
        },
        notifications: {
            all: { type: Boolean, default: true },
            messages: { type: Boolean, default: true },
            commentsOnPost: { type: Boolean, default: true },
            repliesToComment: { type: Boolean, default: true },
            trades: { type: Boolean, default: true },
            events: { type: Boolean, default: true },
        }
    },
    account: {

    },
    security: {
        visibility: { type: Boolean, default: true },
        viewable: {
            anyone: { type: Boolean, default: false },
            friends: { type: Boolean, default: true },
            friendsOfFriends: { type: Boolean, default: true },
        }
    }
}


describe('Settings', () => {
    beforeAll(async () => {
        await mongoose.disconnect();
        await mongoose.connect(process.env.JEST_URI);
    })

    afterAll(async () => {
        await mongoose.disconnect();
    });

    describe('model', () => {
        test('getting invalid settings', async () => {
            expect(async () => { 
                await Settings.getSettings('1') 
            }).rejects.toThrow()
        })
        test('creating new user settings', async () => {
            const res = await Settings.createSettings('1')
        })
        test('creating duplicate user settings', async () => {
            expect(async () => { 
                await Settings.createSettings('1')
            }).rejects.toThrow()
        })
        test('getting user settings', async () => {
            const res = await Settings.getSettings('1')
            expect(res)
        })
        test('updating user settings', async () => {
            const res = await Settings.getSettings('1')
            
            expect(res)
        })
        test('deleting user settings', async () => {
            const res = await Settings.deleteSettings('1')
            expect(async () => {
                await Settings.getSettings('1')
            }).rejects.toThrow()
        })
    })


    describe('Routes', () => {
        test('getting', async () => {

        })

    })
})