const express = require('express');
const User = require('../models/users');
//const Valorant = require('../models/valorant');
//const League = require('../models/league');

const router = express.Router();

// CRUD operations for User data
router.get('/users', async (req, res) => {
    const users = await User.find().exec();
    res.status(200).json({ users });
});

router.post('/users', async (req, res) => {
    const { user } = req.body;
    const {email, password, discord, major} = user;
    if (!email || !password || !discord || !major) {
        res.status(400).json({error: 'Invalid Input!'});
    }
    else {
        const  newUser = await User.create(user);
        res.status(200).json({newUser});
    }
});





module.exports = router;