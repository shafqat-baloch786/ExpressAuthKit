const jwt = require('jsonwebtoken');
const User = require('../models/User');


// Auth middeleware function
const auth = async (req, res, next) => {
    try {
        let token = req.headers.authorization;

        // If token not available
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "You are not allowed to view this content!"
            })
        }


        // If invalid token format
        if (!token.startsWith("Bearer")) {
            return res.status(401).json({
                success: false,
                message: "Invalid token format!",
            })
        }

        token = token.split(' ')[1];
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decode.id).select('_id name email avatar createdAt role');

        // If user not found in database
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found!"
            })
        }

        // Attach user with request
        req.user = user;
        next();


    } catch (error) {
        console.log("Error in auth!", error);
        return res.status(401).json({
            success: false,
            message: "Unauthorized or invalid token"
        });
    }
}


module.exports = auth; 
