const express = require('express');
const League = require('../models/league');

const router = express.Router();

// CRUD operations for League of Legends data
router.get('/league_data', async (req, res) => {
    const league_data = await League.find().exec();
    res.status(200).json({ league_data });
});

router.post('/league_data', async (req, res) => {
    const { league } = req.body;
    const {username, rank, discord, position} = league;
    if (!username || !rank || !discord || !position) {
        res.status(400).json({error: 'Invalid Input!'});
    }
    else {
        const  newLeagueCard = await League.create(league);
        res.status(200).json({newLeagueCard});
    }
});

module.exports = router;