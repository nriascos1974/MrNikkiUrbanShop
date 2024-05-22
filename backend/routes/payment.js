const express = require('express');
const router = express.Router();
const createPayment = require('../controllers/mercadopago/APIpaymentMerPago');
const { verifyToken } = require('../controllers/token/verifyToken');
const checkProductsPayment = require('../middlewares/checkPaymentMiddleware');
const statusPayment = require('../controllers/statusPayment/statusPayment');

//La funcion paymentProducts envia los productos que se encontraban en el carrito para su pago y llega por body junto con el email del usuario comprador

router.post('/payment',verifyToken,checkProductsPayment, (req, res) =>  createPayment(req, res));

router.post('/paymentmercadopago', (req, res) =>  statusPayment(req, res));


module.exports = router;
