// tests/unit/health.test.js

const request = require('supertest');

// Get our Express app object (we don't need the server part)
const app = require('../../src/app');

// Get the version and author from our package.json
const { version, author } = require('../../package.json');

// Get mongoose to disconnect existing connections
const mongoose = require("mongoose")

describe('/ health check', () => {
  beforeAll(async () => {
    await mongoose.disconnect();
    await mongoose.connect(process.env.JEST_URI);
  })

  afterAll(async () => {
    await mongoose.disconnect();
  });
  
  test('should return HTTP 200 response', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });

  test('should return Cache-Control: no-cache header', async () => {
    const res = await request(app).get('/');
    expect(res.headers['cache-control']).toEqual('no-cache');
  });

  test('should return status: ok in response', async () => {
    const res = await request(app).get('/');
    expect(res.body.status).toEqual('ok');
  });

  test('should return correct version, githubUrl, and author in response', async () => {
    const res = await request(app).get('/');
    expect(res.body.author).toEqual(author);
    expect(res.body.version).toEqual(version);
  });
});