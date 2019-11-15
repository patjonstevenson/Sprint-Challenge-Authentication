const request = require('supertest');

const server = require('../api/server');

describe('jokes router', () => {
    describe('GET to /api/jokes/', () => {
        it('should respond with status 200 given JWT',
            async () => {
                const info = {
                    username: `testingUser${new Date()}`,
                    password: "testingPassword"
                };

                const newUser = await request(server).post('/api/auth/register').send(info);
                const token = newUser.body.token
                const jokes = await request(server).get('/api/jokes/').set("authorization", token);
                return expect(jokes.status).toBe(200);
            });
    })
})