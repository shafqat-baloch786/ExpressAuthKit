const asyncWrapper = require('../utils/asyncWrapper');
const User = require('../models/User');
const generateToken = require('../utils/generateToken');
const ErrorHandler = require('../utils/ErrorHandler');

// Register new user 
const register = asyncWrapper(async (req, res, next) => {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });

    // If user exists give error
    if(user) {
        return next (new ErrorHandler('User already exists!', 400));
    }

    // Else create new user
    const newUser = await User.create({
        name,
        email,
        password,
    });

    // Generate token
    const token = generateToken(newUser._id);

    // Success response
    return res.status(201).json({
        success: true,
        message: "User created successfully!",
        token,
        user: {
            id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            avatar: newUser.avatar,
        }
    });

});


module.exports = {
    register,
}