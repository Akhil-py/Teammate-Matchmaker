const express = require('express');
const User = require('../models/users');
//const Valorant = require('../models/valorant');
//const League = require('../models/league');

const router = express.Router();

// CRUD operations for User data
router.get('/users', async (req, res) => {
    //const users = await User.find().exec();
    //res.status(200).json({ users });
    const users = await User.findOne({
        email: req.body.email,
        password: req.body.password,
    });

    if(users){
        return res.json({user: 'true', users});
    }
    else {
        return res.json({user: 'false', users});
    }
});

router.post('/users', async (req, res) => {
    //print("registerInfo: ", req.body.registerInfo);
    const user = req.body.registerInfo;
    console.log("user: ", user);
    const {username, email, password, discord, college} = user;
    if (!username || !email || !password || !discord || !college) {
        res.status(400).json({error: 'Invalid Input!'});
    }
    else {
        try{
            const  newUser = await User.create(user);
            res.status(200).json({status: 'ok', newUser});
        }
        catch (err){
            res.status(400).json({status: 'error', error: 'Duplicate user, email, discord, or password!'});
        }
    }
});

module.exports = router;