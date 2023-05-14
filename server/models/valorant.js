const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    rank: {
        type: String,
        required: true
    },
    discord: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    }
});

const Valorant = mongoose.model('Valorant', ValorantSchema);

module.exports = Valorant;