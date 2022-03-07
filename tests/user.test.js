import user from '../routes/user.js';

import request from 'supertest';
import express from 'express';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use('/', user);

describe('getAllUsers', () => {
  test('/users GET route returns array containing user objects with correct fields ', done => {
    request(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect((res)=> {
        expect(res.body).toEqual(expect.arrayContaining([expect.objectContaining({
          firstName: expect.any(String),
          lastName: expect.any(String),
          email: expect.any(String),
          friends: expect.arrayContaining([expect.any(String)]), 
          friendRequests: expect.arrayContaining([expect.any(String)])
        })]));
      }).expect(200, done);
  });
});

