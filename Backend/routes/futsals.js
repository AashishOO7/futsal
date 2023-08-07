const express = require('express');
const router = express.Router();
const Futsal = require('../model/Futsal');

router.post('/add', async (req, res) => {
  try {
    const { name, contact, price, image_url } = req.body; 

    

    const newFutsal = await Futsal.create({
      name:name,
      contact:contact,
      price:price,
    });

    res.json(newFutsal);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const futsalList = await Futsal.findAll();
    res.json(futsalList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
