const db = require('../models');
const bcrypt = require('bcrypt');

// Test
const test = (req, res) => {
    res.json({message: "Views Test Route successful.."});
};

// Log
const log = (req, res) => {
    console.log(req.body);
};

// Signup (create user)
const signup = (req, res) => {
    if (!req.body.firstName || !req.body.lastName || !req.body.email) {
        return res.status(400).json({message: "All fields are required."});
    }

    db.User.findOne({email: req.body.email}, (err, foundUser) => {
        if (err) return res.status(400).json({message: "Bad request, please try again."});

        if (foundUser) return res.status(400).json({message: "Email has already been registered, please try again."});

        bcrypt.genSalt(10, (err, salt) => {
            if (err) return res.status(400).json({message: "Something went wrong with bcrypt, please try again."});

            bcrypt.hash(req.body.password, salt, (err, hash) => {
                if (err) return res.status(400).json({message: "Something went wrong with bcrypt hash, please try again."});

                const { firstName, lastName, email } = req.body;

                const newUser = {
                    firstName,
                    lastName,
                    email,
                    password: hash
                };

                db.User.create(newUser, (err, createdUser) => {
                    if (err) return res.status(400).json({message: "Could not create new user, please try again."});
                    res.status(201).json(createdUser);
                });
            });
        });
    });
};

module.exports = {
    test,
    signup,
    log
}