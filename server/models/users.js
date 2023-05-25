const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    discord: {
        type: String,
        required: true
    },
    college: {
        type: String,
        required: true
    },
    valorant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Valorant'
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;