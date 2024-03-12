
const { User } = require('../../src/model')
const mongoose = require('mongoose');
const request = require('supertest')
const app = require('../../src/app')
const { connectToDatabases } = require('../../src/connection')
const user = {
    username: 'tester',
    firstName: 'tee',
    lastName: 'ster',
    email: 'test@gmail.com',
    phoneNumber: '6476665555',
    password: 'password',
    picture: 'picture',
    userType: 'user'
}

describe('User', () => {
    beforeAll(async () => {
        await mongoose.disconnect();
        await connectToDatabases()
    })

    afterAll(async () => {
        await User.deleteMany({})
        await mongoose.disconnect();
    });

    describe('model', () => {
        test('getting invalid user', async () => {
            expect(async () => {
                await User.findByCredentials('1', '1')
            }).rejects.toThrow()

        })
        test('getting invalid user', async () => {

        })
        test('creating a new user', async () => {

        })
    })
    describe('route', () => {
        test('register', async () => {
            const res = await request(app).post('/v1/user/register').send(user)
            console.log(res.body)
            //expect(res.status).toBe(201)
        })
    })
})