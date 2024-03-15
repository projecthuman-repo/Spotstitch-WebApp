const crypto = require('crypto');

module.exports = (email) => crypto.createHash('sha256').update(email).digest('hex');