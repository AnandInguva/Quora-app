const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();

const User = require('../models/users');

router.post('/signup', async(req, res, next) => {
    try {
        // console.log(req.body);
        const isAlreadyUser = await User.findById(req.body.email);
        if (isAlreadyUser) {
            return res.status(401).json({
                message: 'Already have an account with this email',
            });
        }
        const password = await bcrypt.hash(req.body.password, 10);

        let newUser = new User({
            _id: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            auth: {
                email: req.body.email,
                password: password,
            },
        });
        user = await newUser.save();
        const token = jwt.sign({
                userId: user._id.toString(),
            },
            'Anand_app', {
                expiresIn: '200d',
            }
        );
        res.status(201).json({
            message: 'User sign up success',
            userId: user._id,
            token: token,
        });
    } catch (error) {
        next(error);
    }
});

router.post('/login', async(req, res, next) => {
    console.log(req.body);
    const email = req.body.username;
    const password = req.body.password;

    const user = await User.findById(req.body.email);
    if (!user) {
        return res.status(200).json({
            message: 'Wrong credentials',
        });
    } else {
        try {
            const isTruePassword = await bcrypt.compare(
                password,
                user.auth.password
            );
            if (!isTruePassword) {
                return res.status(200).json({
                    message: 'Invalid Password',
                });
            }

            const token = jwt.sign({
                    userId: user._id.toString(),
                },
                'Anand_app', {
                    expiresIn: '365d',
                }
            );
            console.log(token);
            res.status(200).json({
                token: token,
                userId: user._id,
            });
        } catch (error) {
            error.message = 'Login failed';
            next(error);
        }
    }
});

module.exports = router;