import index from '../routes/index.js';

import request from 'supertest';
import express from 'express';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use('/', index);

test('index route works', done => {
  request(app)
    .get('/')
    .expect('Content-Type', /json/)
    .expect({ message: 'This is the FakeBook API index page. Please connect to an endpoint with data.' })
    .expect(200, done);
});