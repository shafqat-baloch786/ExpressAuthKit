const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');
const errorMiddleware = require('./middlewares/errorHandler');

const authRoute = require('./routes/authRoute');

// HTTP headers for security
app.use(helmet());

// Allow for origins
app.use(cors());

// Body parsers
app.use(express.json()); // parse JSON
app.use(express.urlencoded({ extended: true })); // parse form data

// Auth route
app.use('/api/auth', authRoute);


// error middleware
app.use(errorMiddleware);

// Exporitng express app
module.exports = app;