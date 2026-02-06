require('dotenv').config({ path: __dirname + '/../.env' });
const http = require('http');
const app = require('./app');
const connectDb = require('./config/db');

const PORT = process.env.PORT || 5000;

// Start server
const startServer = async () => {
    try {
        await connectDb();
        
        const server = http.createServer(app);
        server.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (err) {
        console.error('Failed to connect to database:', err);
        process.exit(1); // Exit the app if DB connection fails
    }
};

startServer();