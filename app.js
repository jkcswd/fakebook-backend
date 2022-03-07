import createError from 'http-errors';
import express from 'express';
import path from 'path';
import logger from 'morgan';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import indexRouter from './routes/index.js';
import userRouter from './routes/user.js'

const app = express();
const __dirname = path.resolve();

// MongoDB connection 
const mongoDB = process.env.MONGO_STRING;
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Configure server
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', indexRouter);
app.use('/user', userRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.json({ message:'error' });
});

export default app;
