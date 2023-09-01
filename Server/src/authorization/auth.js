const jwt = require('jsonwebtoken');
const { secretKey } = process.env.JWT_SECRET_KEY; // You'll need to provide your secret key

function authorizationMiddleware(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'Authorization token is missing.' });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded; // Store the decoded user information in the request object
    next(); // Call the next middleware
  } catch (err) {
    return res.status(403).json({ message: 'Invalid authorization token.' });
  }
}

module.exports = authorizationMiddleware;