const mongoose = require('mongoose');

const LeagueSchema = new mongoose.Schema({
    userid: {
        type: String,
        required: true
    },
    lol_username: {
        type: String,
        required: true
    },
    rank: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: false
    }
});

const League = mongoose.model('League', LeagueSchema);

module.exports = League;