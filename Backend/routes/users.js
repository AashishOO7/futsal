const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { User, Agent } = require('../model');

// GET users listing
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});


// Get all user list of player
router.get('/get-player', async function (req, res, next) {
  const allPlayer = await User.findAll();
  res.json({
    status: true,
    allPlayer,
  });
})

// Register new user
router.post('/register', async function (req, res, next) {
  const { email } = req.body;
  const existingUser = await User.findOne({ where: { email: email } });
  if (existingUser) {
    res.json({ message: 'Email already exists' });
  } else {
    await User.create(req.body);
    res.json({ message: 'User Created Successfully' });
  }
});

// User login
router.post('/login', async function (req, res, next) {
  const { email, password } = req.body;
  console.log('Received login request for user:', email);

  const existingUser = await User.findOne({ where: { email: email } });

  if (!existingUser) {
    console.log('User not found:', email);
    res.status(401).json({ message: 'User not registered' });
  } else if (existingUser.password === password) {
    console.log('User logged in:', email);
    res.json({
      message: 'User logged in',
      userInfo: {
        name: existingUser.name,
        email: existingUser.email,
        address: existingUser.address,
        contact: existingUser.phone
        // Include other user details you want to send
      }
    });
  } else {
    console.log('Invalid password for user:', email);
    res.status(401).json({ message: 'User credentials do not match' });
  }
});


// Register futsal agent
router.post('/agent', async function (req, res, next) {
  const { email } = req.body;
  console.log('Received agent registration request for email:', email);

  const existingAgent = await Agent.findOne({ where: { email: email } });
  if (existingAgent) {
    console.log('Agent with email already exists:', email);
    res.json({ message: 'Email already exists' });
  } else {
    await Agent.create(req.body);
    console.log('Futsal agent registered:', email);
    res.json({ message: 'Futsal agent registered' });
  }
});

// Futsal agent login
router.post('/agent-login', async function (req, res, next) {
  const { email, password } = req.body;
  console.log('Received login request for agent:', email);

  const existingAgent = await Agent.findOne({ where: { email: email } });

  if (!existingAgent) {
    console.log('Agent not found:', email);
    res.status(401).json({ message: 'Agent not registered' });
  } else {

    if (existingAgent.password == password) {
      console.log('Agent logged in:', email);
      res.json({ message: 'Agent logged in' });
    } else {
      console.log('Invalid password for agent:', email);
      res.status(401).json({ message: 'Agent credentials do not match' });
    }
  }
});

//get by id
router.post


module.exports = router;
