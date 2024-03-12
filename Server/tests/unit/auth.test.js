
const { createToken, verifyToken } = require('../../src/authorization')

const user = {
    id: '123456',
    email: 'test@gmail.com'
}

describe('Authentication', () => {
    describe('creating new token', () => {
        let token
        test('ensure same token is created everytime', async () => {
            token = createToken(user.id, user.email, 200)
            expect(token).toEqual(createToken(user.id, user.email, 200))
        })
        test('verify token', async () => {
            const req = {
                headers: {
                    authorization: `Bearer ${token}`
                }
            }
            const res = {
                locals: {}
            }
            await verifyToken(req, res, () => {  })
            expect(res.locals.jwtData.id).toEqual(user.id)
            expect(res.locals.jwtData.email).toEqual(user.email)
        })
    })
})