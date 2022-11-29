const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First Name is required.'],
        minLength: [2, 'First Name must be at least 2 characters long.'],
        maxLength: [30, 'First Name cannot exceed 30 characters in length.'],
        trim: true,
    },
    lastName: {
        type: String,
        required: [true, 'Last Name is required.'],
        minLength: [2, 'Last Name must be at least 2 characters long.'],
        maxLength: [30, 'Last Name cannot exceed 30 characters in length.'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Email Address is required.'],
        trim: true,
        unique: [true, 'Email Address is already registered, please try again.'],
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required.'],
        minLength: [4, 'Password must be at least 4 characters long'],
    },
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

module.exports = User;
