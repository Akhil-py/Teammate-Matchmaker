const mongoose = require('mongoose');

const DotaSchema = new mongoose.Schema({
    userid: {
        type: String,
        required: true
    },
    dota_username: {
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

const Dota = mongoose.model('Dota', DotaSchema);

module.exports = Dota;