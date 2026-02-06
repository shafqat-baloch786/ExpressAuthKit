require('dotenv').config({ path: __dirname + '/../.env' });
const http = require('http');
const app = require('./app');
const { dirname } = require('path');
const PORT = process.env.PORT || 5000;

// Creating http server
const server = http.createServer(app);

// Listening to PORT 5000
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})