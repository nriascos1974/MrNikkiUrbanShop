const User = require("../../../models/user");

const DBShoppingCartUpdateProduct = async (idUser, idProduct, newAmmount) => {
  try {
    // Filtro para buscar el usuario por ID y el producto en su carrito
    const filter = { _id: idUser, "shoppingCart.products.product": idProduct };

    // Objeto de actualización con la propiedad a actualizar
    const update = { $set: { "shoppingCart.products.$.ammount": newAmmount } };

    // Buscar y actualizar el producto en el carrito del usuario
    const updatedUser = await User.findOneAndUpdate(filter, update, {
      new: true, // Devuelve el documento después de que se haya aplicado la actualización
    });

    return updatedUser.shoppingCart;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = DBShoppingCartUpdateProduct;
