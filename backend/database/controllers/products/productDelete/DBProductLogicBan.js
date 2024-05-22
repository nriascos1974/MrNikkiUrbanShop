const Product = require('../../../models/product');

const logicBanProduct = async (idProduct) => {
  const productUpdate = await Product.findById(idProduct);

  if (productUpdate.active != 'bloqueado' && productUpdate.active != 'desactivado'){
    productUpdate.active = 'bloqueado';
  } else{
    productUpdate.active = 'en venta';
  }

  productUpdate.save();

  return productUpdate;
};

module.exports = logicBanProduct;