const mongoose = require('mongoose');

const dbUser = process.env.MONGODB_USER;
const dbPassword = process.env.MONGODB_PASSWORD;

mongoose.connect(`mongodb://localhost:27017/,)
  .then(() => {
    console.log('Connected to MongoDB database!');
  })
  .catch(() => {
    console.log('Connection failed!');
  });