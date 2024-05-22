const getSaleByIdDB = require("../../database/controllers/sales/DBGetSaleById");
const checkUserExists = require("../../database/helper/DBcheckUserExists");

const getStateOrder = async (req, res) => {
  const { id } = req.query;
  const orders = [];

  console.log(id);
  // const data  = await DBStateGetOrder('6462a2c9c84db34e8dfc03e2');
  // const orders = await getSaleByIdDB('6463df66453f673d99a26de8')
  // res.status(200).json(orders)

  try {
    if (id) {
      const user = await checkUserExists(id);
      const purchased = user.purchased;
      //mapear las id de las ordenes
      const ordersUser = Promise.all(
        purchased.map(async (order) => {
          const orderData = await getSaleByIdDB(order);
          orders.push(orderData);
        })
      );

      await ordersUser;
      return res.status(200).json(orders);
    }

    return res.status(407).json({msg:"Acceso denegado"});
  } catch (e) {}
};

module.exports = getStateOrder;
