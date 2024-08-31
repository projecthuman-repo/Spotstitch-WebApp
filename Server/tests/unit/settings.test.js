
const { Settings } = require('../../src/model');
const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../../src/app');
const { createToken } = require('../../src/authorization/auth');

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
        visibility: true,
        viewable: {
            anyone: false,
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
                await Settings.getSettings('2')
            }).rejects.toThrow()
        })
        test('creating new user settings', async () => {
            const res = await Settings.createSettings('1')
            expect(res.security.visibility).toEqual(defaultSettings.security.visibility)
        })
        test('creating duplicate user settings', async () => {
            expect(async () => {
                /* eslint-disable no-unused-vars */
                const res = await Settings.createSettings('1')
                /* eslint-disable no-unused-vars */
            }).rejects.toThrow()
        })
        test('getting user settings', async () => {
            const res = await Settings.getSettings('1')
            expect(res.security.visibility).toEqual(defaultSettings.security.visibility)
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
        test('Accessing GET route without authorization', () => {
            request(app).get('/v1/settings').expect(401)
        })
        test('Accessing GET route with invalid Token', async () => {
            const res = await request(app)
                .get('/v1/settings')
                .set('Authorization', `Bearer ${'hi'}`)
            expect(res.status).toEqual(401)
        })
        test('getting user settings', async () => {
            await Settings.createSettings('1')
            const token = createToken('1', 'user1@email.com', '7d')
            const res = await request(app)
                .get('/v1/settings')
                .set('Authorization', `Bearer ${token}`)
            console.log(res.body)
            await Settings.deleteSettings('1')
            expect(res.body)
            expect(res.body.settings.userId).toEqual('1')
            
        })

    })
})