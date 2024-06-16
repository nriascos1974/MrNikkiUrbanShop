const express = require('express');
const router = express.Router();
const { verifyToken } = require('../controllers/token/verifyToken');
const  shoppingCart  = require('../controllers/shoppingCart/shoppingCart.controller'); 
const shoppingCartDelete = require('../controllers/shoppingCart/shoppingCartDelete.controller');


//Add products at shopping cart user
router.post('/shoppingcart', verifyToken, (req, res) => shoppingCart(req, res))

//Add products at shopping cart user
router.put('/shoppingcartdelete', verifyToken, (req, res) => shoppingCartDelete(req, res))

module.exports = router;