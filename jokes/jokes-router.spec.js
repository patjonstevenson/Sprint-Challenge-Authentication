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
            }
        );

        it('should respond with jokes',
            async () => {
                const info = {
                    username: `testingUser${new Date()}`,
                    password: "testingPassword"
                };

                const newUser = await request(server).post('/api/auth/register').send(info);
                const token = newUser.body.token
                const jokes = await request(server).get('/api/jokes/').set("authorization", token);
                const joke1 = jokes.body[0];
                console.log("Joke 1: ", joke1.joke);
                return expect(joke1).toHaveProperty("joke");
            }
        );
    })
})