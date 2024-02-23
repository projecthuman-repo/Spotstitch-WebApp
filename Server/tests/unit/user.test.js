
const { User } = require('../../src/model')
const mongoose = require('mongoose');




describe('User model', () => {
    beforeAll(async () => {
        await mongoose.disconnect();
        await mongoose.connect(process.env.JEST_URI);
    })

    afterAll(async () => {
        await mongoose.disconnect();
    });

    describe('User routes', () => {
        test('getting invalid user', async () => {
            const res = await User.getUser('1')
        })
        test('getting invalid user', async () => {
            
        })
    })
})