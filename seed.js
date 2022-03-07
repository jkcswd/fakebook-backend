import User from "./models/User.js";
import { faker } from '@faker-js/faker';
import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();


// MongoDB connection 
const mongoDB = process.env.MONGO_STRING;
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

for (let i=1; i <= 100; i++) {
  new User(
    {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      friends: null,
      friendRequests: null,
    }
  ).save(err => {
    if (err) { return next(err); }
  });
}

