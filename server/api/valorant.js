const express = require('express');
const Valorant = require('../models/valorant');

const router = express.Router();

// CRUD operations for User data
router.get('/valorant_data', async (req, res) => {
    const valorant_data = await Valorant.find().exec();
    res.status(200).json({ valorant_data });
});

router.post('/valorant_data', async (req, res) => {
    const { valorant } = req.body;
    const {username, rank, discord, position} = valorant;
    if (!username || !rank || !discord || !position) {
        res.status(400).json({error: 'Invalid Input!'});
    }
    else {
        const  newValorantCard = await Valorant.create(valorant);
        res.status(200).json({newValorantCard});
    }
});

module.exports = router;