const User = require("../../../models/user");

const DBShoppingCartRemoveProduct = async (idUser, idProduct) => {
  try {
    // console.log("DBShoppingCartRemoveProduct");
    const cartUser = await User.findByIdAndUpdate(
      idUser,
      { $pull: { "shoppingCart.products": { product: idProduct } } },
      { returnDocument: "after" }
    );
    // console.log("ESTA ES EL CARRITO => " + cartUser.shoppingCart);
    
    cartUser.shoppingCart.deleteOne({ product: idProduct });
    return cartUser.shoppingCart;
  } catch (error) {
    // console.log(error.message);
  }
};

module.exports = DBShoppingCartRemoveProduct;
