const mongoose = require('mongoose');

const LeagueSchema = new mongoose.Schema({
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

const League = mongoose.model('League', LeagueSchema);

module.exports = League;