const request = require('supertest');

const server = require('../api/server');

describe('auth router', () => {
    describe('POST to /api/auth/register', () => {
        it('should respond with a token given complete user information',
            async () => {
                const info = {
                    username: "testingUser",
                    password: "testingPassword"
                };

                const newUser = await request(server).post('/api/auth/register').send(info);
                return expect(newUser.body).toHaveProperty("token");
            }
        );

        it('should include the provided username in the response',
            async () => {
                const info = {
                    username: "testingUser2",
                    password: "testingPassword"
                };

                const newUser = await request(server).post('/api/auth/register').send(info);
                return expect(newUser.body.user.username).toEqual(info.username);
            }
        );

        it('should include an id in the user object',
            async () => {
                const info = {
                    username: "testingUser2",
                    password: "testingPassword"
                };

                const newUser = await request(server).post('/api/auth/register').send(info);
                return expect(newUser.body.user).toHaveProperty("id");
            }
        );
    });

    describe('POST to /api/auth/login', () => {

    });
})