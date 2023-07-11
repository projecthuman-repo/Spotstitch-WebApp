// src/routes/index.js

const express = require('express');
const router = express.Router();
const response = require('../response');

/**
 * Expose all of our API routes on /v1/* to include an API version.
 */
router.use(`/v1`, require('./api'));

/**
 * Define a simple health check route. If the server is running
 * we'll respond with a 200 OK.  If not, the server isn't healthy.
 */
router.get('/', (req, res) => {
    // Client's shouldn't cache this response (always request it fresh)
    res.setHeader('Cache-Control', 'no-cache');
    // Send a 200 'OK' response
    const success = response.createSuccessResponse({
      author,
      githubUrl: 'https://github.com/ElusoryPaths/fragments',
      version,
      hostname: hostname(),
    });
    res.status(200).json(success);
  });
  
  module.exports = router;