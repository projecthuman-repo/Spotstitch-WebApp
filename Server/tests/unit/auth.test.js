
const { createToken, verifyToken } = require('../../src/authorization')
const hash = require('../../src/hash');
const user = {
    id: '123456',
    email: 'test@gmail.com'
}

describe('Authentication', () => {
    describe('creating new token', () => {
        let token
        test('ensure same token is created given identical information', async () => {
            token = createToken(user.id, user.email, 200)
            expect(token).toEqual(createToken(user.id, user.email, 200))
        })
        test('verify jwt token from client with correct headers', async () => {
            const req = {
                headers: {
                    authorization: `Bearer ${token}`
                }
            }
            const res = {
                locals: {}
            }
            await verifyToken(req, res, () => { })
            expect(res.locals.jwtData.id).toEqual(user.id)
            expect(res.locals.jwtData.email).toEqual(user.email)
        })
    })
})

describe('Hashing', () => {
    

    describe('hash()', () => {
        const email = 'user1@example.com';

        test('email addresses should get hashed using sha256 to hex strings', () => {
            const hashedEmail = 'b36a83701f1c3191e19722d6f90274bc1b5501fe69ebf33313e440fe4b0fe210';
            expect(hash(email)).toEqual(hashedEmail);
        });

        test('hashing should always return the same value for a given string', () => {
            const email = 'user1@example.com';
            expect(hash(email)).toEqual(hash(email));
        });
    });
})