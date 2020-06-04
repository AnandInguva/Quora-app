const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
            required: true
        },
        password: {
            type: String,
            required: true
        }
    },

    questions: [{
        type: Schema.Types.ObjectId,
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

module.exports = mongoose.model('User', userSchema);