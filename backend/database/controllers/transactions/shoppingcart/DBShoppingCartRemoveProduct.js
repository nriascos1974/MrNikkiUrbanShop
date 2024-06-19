const User = require("../../../models/user");

const DBShoppingCartRemoveProduct = async (idUser, idProduct, size) => {
  try {
    // console.log("DBShoppingCartRemoveProduct");
    const cartUser = await User.findByIdAndUpdate(
      idUser,
      { $pull: { "shoppingCart.products": { product: idProduct, size: size } } },
      { returnDocument: "after" }
    );
    // console.log("ESTA ES EL CARRITO => " + cartUser.shoppingCart);
    
    cartUser.shoppingCart.deleteOne({ product: idProduct, size: size });
    return cartUser.shoppingCart;
  } catch (error) {
    // console.log(error.message);
  }
};

module.exports = DBShoppingCartRemoveProduct;
