const jwt = require('jsonwebtoken');
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

  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.jwt) {
    // TODO: Testing with frontend
    token = req.cookies.jwt;
  }

  if (!token || token.trim() === '') {
    return res.status(401).json({ message: 'Token not received' });
  }

  // Verify the token
  return new Promise((resolve, reject) => {
    return jwt.verify(token, jwtSecret, (err, decoded) => {
      if (err) {
        reject(err.message);
        return res.status(401).json({ message: 'Token expired' });
      } else {
        console.log('Token verified');
        resolve();

        // Use it in the next middleware to ensure the user is authorized
        res.locals.jwtData = decoded;

        // Call the next middleware
        return next();
      }
    });
  });
};

module.exports = { createToken, verifyToken };
