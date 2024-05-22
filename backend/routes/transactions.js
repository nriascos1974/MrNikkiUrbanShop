const express = require('express');
const router = express.Router();
const getStateOrder = require('../controllers/transactions/getStateOrder.controller');
const getDetailOder = require('../controllers/transactions/getDetailOrder.controller');
const updateStateProduct = require('../controllers/transactions/updateStateProduct.controller');


router.get('/transactions', (req, res) => getStateOrder(req,res));

router.get('/transactions/:id', (req, res) => getDetailOder(req,res));

router.put('/transactions/:id/:product', (req, res) => updateStateProduct(req,res));

module.exports = router;