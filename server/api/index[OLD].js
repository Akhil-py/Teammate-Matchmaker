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
    //console.log("req: ", req.body.registerInfo);
    const user = req.body.registerInfo;
    //console.log("user: ", user);
    const {username, email, password, discord, college} = user;
    if (!username || !email || !password || !discord || !college) {
        res.status(400).json({error: 'Invalid Input!'});
    }
    else {
        const  newUser = await User.create(user);
        res.status(200).json({newUser});
    }
});

module.exports = router;