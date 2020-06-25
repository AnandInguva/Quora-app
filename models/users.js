const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');
/*
User schema -> 
            id: email
            firstName: first name
            lastName: last name
            auth.email: email
            auth.password: password
            questions: [questions]
            answers: [answers]
*/

const userSchema = new Schema({
    _id: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    auth: {
        email: {
            type: String,
            required: [true, 'Please provide an email'],
            unique: true,
            lowercase: true,
            validate: [validator.isEmail, 'Please provide a valid email']
        },
        password: {
            type: String,
            required: true,
            minLength: 8
        }
    },
    photo: String,
    questions: [{
        type: String,
        ref: 'Question'
    }],
    answers: [{
        type: Schema.Types.ObjectId,
        ref: 'Question'
    }],
    upVotes: [{
        type: Schema.Types.ObjectId,
        ref: 'Question'
    }],
    downVotes: [{
        type: Schema.Types.ObjectId,
        ref: 'Question'
    }]
});

// create the model with Model name and the schema
module.exports = mongoose.model('User', userSchema);