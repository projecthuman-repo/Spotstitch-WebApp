/* eslint-disable no-unused-vars */
const { Post } = require('../../src/model')
/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');


describe('Post model', () => {
    beforeAll(async () => {
        await mongoose.disconnect();
        await mongoose.connect(process.env.JEST_URI);
    })

    afterAll(async () => {
        await mongoose.disconnect();
    });

    describe('Post routes', () => {
        test('getting invalid', async () => {
            
        })
        
    })
})