// __tests__/app.test.js

const request = require('supertest');
const app = require('../app'); 

describe('GET /', () => {
  it('responds with "Hello, Express!"', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello, Express!');
    expect(response.status).toBe(200);
  });
});
