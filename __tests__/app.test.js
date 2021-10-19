const request = require('supertest');
const app = require('../src/server');
import "babel-polyfill";

 describe('Testing root path (server should be running)', () => {
    test('should output 200', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });
});

describe('Testing "/test" path (server should be running) ', () => {
    test('should output 200 ', async () => {
        const response = await request(app).get('/test');
        expect(response.statusCode).toBe(200);
    });
});