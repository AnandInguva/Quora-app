const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    auth: {
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
    },

    questions: [{
        type: Schema.Types.ObjectId,
        ref: 'Question',
    }, ],
    answers: [{
        type: Schema.Types.ObjectId,
        ref: 'Question',
    }, ],
    upVotes: [{
        type: Schema.Types.ObjectId,
        ref: 'Question',
    }, ],
});

module.exports = mongoose.model('User', userSchema);