const express = require('express');
const router = express.Router();
const { verifyToken } = require('../controllers/token/verifyToken');
const  shoppingCart  = require('../controllers/shoppingCart/shoppingCart.controller') 


//Add products at shopping cart user
router.post('/shoppingcart', verifyToken, (req, res) => shoppingCart(req, res))

module.exports = router;