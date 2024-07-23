const express = require("express");
const cors = require("cors");

const response = require("./response");
const logger = require("./logger");
const pino = require("pino-http")({
  // Use our default logger instance, which is already configured
  logger,
});

// Create an express app instance we can use to attach middleware and HTTP routes
const app = express();

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb', parameterLimit: 50000 }));

// Use logging middleware
app.use(pino);

// Use CORS middleware so we can make requests across origins
app.use(cors());

// Define our routes
app.use("/", require("./routes"));

// Add 404 middleware to handle any requests for resources that can't be found
app.use((req, res) => {
  const error = response.createErrorResponse(404, "not found");
  res.status(404).json(error);
});

// Add error-handling middleware to deal with anything else
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  // We may already have an error response we can use, but if not, use a generic
  // 500 server error and message.
  const status = err.status || 500;
  const message = err.message || "unable to process request";

  // If this is a server error, log something so we can see what's going on.
  if (status > 499) {
    logger.error({ err }, `Error processing request`);
  }
  const error = response.createErrorResponse(status, message);
  res.status(status).json(error);
});

// Export our `app` so we can access it in server.js
module.exports = app;
