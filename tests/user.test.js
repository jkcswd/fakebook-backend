import user from '../routes/user.js';

import request from 'supertest';
import express from 'express';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use('/', user);

describe('getAllUsers tests', () => {
  test('if /users GET route returns 200 status code', done => {
    request(app)
      .get('/')
      .expect(200, done);
  });
  test('if /users GET route returns correct content type', done => {
    request(app)
      .get('/')
      .expect('content-type', 'application/json; charset=utf-8', done);
  });

  // Halted testing at this point as simple query to DB does not need testing.
});

