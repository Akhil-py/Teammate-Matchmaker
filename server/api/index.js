const express = require('express');
const User = require('../models/users');
const Valorant = require('../models/valorant');
//const League = require('../models/league');

const router = express.Router();

// CRUD operations for User data
router.get('/users', async (req, res) => {
  try {
    const users = await User.find().exec();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/users', async (req, res) => {
  const user = req.body;
  const { username, email, password, discord, college } = user;

  if (!username || !email || !password || !discord || !college) {
    res.status(400).json({ error: 'Invalid Input!' });
  } else {
    try {
      const newUser = await User.create(user);
      res.status(200).json({ newUser });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
});

// CRUD operations for Valorant data

router.post('/users/:userId/valorant', async (req, res) => {
  const userId = req.params;
  const { username, rank, discord, position } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const valorantData = {
      username,
      rank,
      discord,
      position,
    };

    const createdValorantData = await Valorant.create(valorantData);

    user.valorant = createdValorantData;
    await user.save();

    res.status(200).json({ valorantData: createdValorantData });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.put('/users/:userId/valorant', async (req, res) => {
  const { userId } = req.params;
  const { username, rank, discord, position } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const valorantData = {
      username,
      rank,
      discord,
      position,
    };

    user.valorant = valorantData;
    await user.save();

    res.status(200).json({ valorantData });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/users/:userId/valorant', async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const valorantData = user.valorant;
    res.status(200).json({ valorantData });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// TODO: CRUD operations for League data


module.exports = router;
