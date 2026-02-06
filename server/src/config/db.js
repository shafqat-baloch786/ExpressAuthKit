const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI;


// Connect database
const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Database connected successfully!");
    } catch (error) {
        console.log("Error occured while connecting database!", error);
    }
}


module.exports = connectDB;