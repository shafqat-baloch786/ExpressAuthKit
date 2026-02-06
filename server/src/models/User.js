const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required!"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Email is required!"],
        trim: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, "Password is required!"]
    },
    avatar: {
        type: String,
        default: ""
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user',
    }

}, { timestamps: true })


// Hashing the password before saving to database
userSchema.pre('save', async function () {

    // If password field is not modified (usually in edit profile), then skip logic
    if (!this.isModified("password")) {
        return;
    }

    // Otherwise hash the password before saving into database
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

// Compare password method
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

// User model
const User = mongoose.model('User', userSchema);

module.exports = User;
