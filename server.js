const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// MongoDB connection string
const MONGODB_URI = 'mongodb+srv://kadeem929:quMAJI8nsXX4yfyX@cluster0.cnqa4.mongodb.net/recipe-sharing-platform?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

const app = express();

// Middleware
app.use(express.json());

// Import routes
const recipesRouter = require('./routes/recipes');

// Mount routes
app.use('/recipes', recipesRouter);

// global error handler middleware 
app.use((err, req, res, next) => {
  // define a default error object 
  const defaultErr = {
      log: 'Express error handler caught an unknown error', 
      status: 500, 
      message: { err: 'An internal server error occured' }, 
  }; 

  /* merge incoming error obj with default error obj (ensures all properties 
  are defined in case they are missing on the error obj) */
  const errorDetails = {
      log: err.log || defaultErr.log, 
      status: err.status || defaultErr.status, 
      message: err.message || defaultErr.message, 
  }; 

  // log error details for debugging on the server 
  console.error(errorDetails.log); 
  console.error(`Request Method: ${req.method}`); 
  console.error(`Request URL: ${req.originalUrl}`); 

  // send error status code and message to the client 
  res.status(errorDetails.status).json(errorDetails.message); 
})

// Server setup
const port = 5002;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});