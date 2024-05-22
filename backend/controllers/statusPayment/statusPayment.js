const axios = require("axios");
const purchasedProduct = require('../../database/controllers/transactions/DBPurchasedProducts')
const checkUserExists  = require  ("../../database/helper/DBcheckUserExists");


const statusPayment = async (req, res) => {
    const id = req.query['data.id'];
    const type = req.query.type;
    const MERCADOPAGO_ACCESS_TOKEN = process.env.MERCADOPAGO_ACCESS_TOKEN;


    if (type && type === 'payment') {
        // Aquí puedes verificar el estado del pago con el ID correspondiente
        // y enviar la confirmación a MercadoPago si corresponde
    
        const payment = await axios.get(`https://api.mercadopago.com/v1/payments/${id}?access_token=${MERCADOPAGO_ACCESS_TOKEN}`)
        // const payment = await axios.get(`https://api.mercadopago.com/v1/payments/1312949420?access_token=TEST-3324541535061907-051014-c83ad473ef5d36a05e325ab2a3182265-1371385363`)

        if (payment.data.status === 'approved') {
            // Aquí puedes hacer el envío de la confirmación de pago a MercadoPago
            console.log('transferencia aprovada')
            const email = payment.data.additional_info.items[0].description;
            const user = await checkUserExists(null,email);
            // console.log(user._id)
            await purchasedProduct(user._id);
          }
      }
    
      res.send('OK');
};

module.exports = statusPayment;
