
const mongoose = require('mongoose');
const { validateFields, updateFields } = require('../../src/model');

const ignore = ['test', 'test2', 'a']

const valid = {
    this: '1',
    is: '1',
    a: '1',
    test: '1',
}

const obj = {
    this: '2',
    is: '3',
}

const invalid = {
    this: 'b',
    random: 'f',
    fields: 'a'
}

const TestSchema = new mongoose.Schema({
    this: String,
    is: String,
    a: String,
    test: String,
})

const Test = mongoose.model('Test', TestSchema);

describe('Validation testing', () => {
    beforeAll(async () => {
        await mongoose.disconnect();
        await mongoose.connect(process.env.JEST_URI);
    })

    afterAll(async () => {
        await mongoose.disconnect();
    });

    describe('validateFields()', () => {
        describe('with ignore list', () => {
            test('validation failure', async () => {
                const empty = {}
                const res = validateFields(Test.schema, empty)
                expect(res).toEqual(['this', 'is', 'a', 'test'])
            })
            test('validation success', async () => {
                const res = validateFields(Test.schema, valid)
                expect(res).toEqual([])
            })
        })

        describe('with ignore list', () => {
            test('validation failure with ignore list', async () => {
                console.log()
                const res = validateFields(Test.schema, obj, [])
                expect(res).toEqual(['a', 'test'])
            })
            test('validation success with ignore list', async () => {
                console.log()
                const res = validateFields(Test.schema, obj, ignore)
                expect(res).toEqual([])
            })
        })
    })
    describe('updateFields()', () => {
        test('updating an existing model with all fields', async () => {
            const temp = new Test()
            await temp.save()
            
            updateFields(temp, valid)
            await temp.save()

            expect(temp.this).toEqual(valid.this)
            expect(temp.is).toEqual(valid.is)
            expect(temp.a).toEqual(valid.a)
            expect(temp.test).toEqual(valid.test)
        })

        test('updating an existing model with partial fields', async () => {
            const temp = new Test(valid)
            await temp.save()
            
            updateFields(temp, obj)
            await temp.save()

            expect(temp.this).toEqual(obj.this)
            expect(temp.is).toEqual(obj.is)
            expect(temp.a).toEqual(valid.a)
            expect(temp.test).toEqual(valid.test)

        })

        test('updating an existing model with invalid and partial fields', async () => {
            const temp = new Test(valid)
            await temp.save()
            
            updateFields(temp, invalid)
            await temp.save()

            expect(temp.this).toEqual(invalid.this)
            expect(temp.is).toEqual(valid.is)
            expect(temp.a).toEqual(valid.a)
            expect(temp.test).toEqual(valid.test)
            expect(temp.random).not.toEqual(invalid.random)
            expect(temp.fields).not.toEqual(invalid.fields)
        })
    })
})