const jwt = require('jsonwebtoken');
const { createErrorResponse } = require('../response');
const logger = require('../logger');
const { CrossPlatformUser } = require('../model');
const jwtSecret = process.env.JWT_SECRET;

// Create a token with the user id and email
// expiresIn is a string that describes the time until the token expires
const createToken = (id, email, expiresIn) => {
  const payload = { id, email };
  const token = jwt.sign(payload, jwtSecret, {
    expiresIn,
  });
  return token;
};

// Verify the token and call next if successful
const verifyToken = async (req, res, next) => {
  let token;
  if (req?.headers?.authorization?.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies?.jwt) {
    // TODO: Testing with frontend
    token = req.cookies.jwt;
  }

  if (!token || token.trim() === '') {
    logger.error({}, "No token found")
    return res.status(401).json(createErrorResponse(401, 'Unauthorized'));
  }
  logger.info({ token }, "token found")
  // Verify the token

  return jwt.verify(token, jwtSecret, async (err, decoded) => {
    if (err) {
      logger.error({ error: err.message }, "Invalid Token")
      //reject(err.message);
      return res.status(401).json(createErrorResponse(401, 'Unauthorized'));
    } else {
      logger.info({}, "Token verified")
      //resolve();

      // attach spotstitch id to the request
      const user = await CrossPlatformUser.findById(decoded.id)
      decoded.id = user.spotstitchUserId

      // Use it in the next middleware to ensure the user is authorized
      res.locals.jwtData = decoded;

      // Call the next middleware
      return next();
    }
  })

};

const decodeToken = async (token) => {
  return jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) {
      logger.error({ error: err.message }, "Invalid Token")
      //reject(err.message);
      return createErrorResponse(401, 'Unauthorized');
    } else {
      logger.info({}, "Token verified")
      //resolve();

      // Use it in the next middleware to ensure the user is authorized
      return decoded;
    }
  })
}
module.exports = { createToken, verifyToken, decodeToken };
