const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');

// HTTP headers for security
app.use(helmet());

// Allow for origins
app.use(cors());

// Body parsers
app.use(express.json()); // parse JSON
app.use(express.urlencoded({ extended: true })); // parse form data

// Exporitng express app
module.exports = app;