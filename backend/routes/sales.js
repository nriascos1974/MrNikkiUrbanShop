const express = require('express');
const router = express.Router();

const {getAllSales} = require('../controllers/sales/APIGetAllSales');
const {getSaleById} = require('../controllers/sales/APIGetSaleById');

router.get('/sales', (req, res) => {getAllSales(req, res)});
router.get('/sale', (req, res, next) => {
    const {id} = req.query;

    if (!id){
        return res.status(401).json({msg: "Faltan datos para poder proceder con la operación!"});
    }

    next();
}, (req, res) => {getSaleById(req, res)});

module.exports = router