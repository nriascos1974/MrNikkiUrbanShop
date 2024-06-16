const checkUserExists = require("../../database/helper/DBcheckUserExists");
const DBShoppingCartGet = require("../../database/controllers/transactions/shoppingcart/DBShoppingCartGet");
const DBShoppingCartRemoveProduct = require("../../database/controllers/transactions/shoppingcart/DBShoppingCartRemoveProduct");

const shoppingCartDelete = async (req, res) => {
  try {
    const productsShoppingCart = req.body;
    const userId = productsShoppingCart._idUser;
    // console.log("USUARIO ID => "+userId);
    // console.log("PRODUCTO ID A BORRAR CARRITO => " + productsShoppingCart._id);

    // buscar el usuario
    let dataUser = await checkUserExists(userId, null);

    // console.log(dataUser);
    if (dataUser) {
      const productsShopping = await DBShoppingCartGet(userId);

      // console.log("PRODUCTOS CARRITO => " + productsShopping);

      if (productsShopping.shoppingCart === undefined) {
        console.log("carrito vacio");
      } else {
        console.log("PRODUCTOS => " + productsShopping.shoppingCart);

        const alreadyInCart = productsShopping.shoppingCart.products.some(
          (item) => item.product._id.equals(productsShoppingCart._id)
        );

        // console.log("ESTA EL PRODUCTO EN EL CARRITO => " + alreadyInCart);
        //el producto no esta en el carrito
        if (alreadyInCart) {
          // console.log("Esta el producto en el carrito del usuario");

          await DBShoppingCartRemoveProduct(userId, productsShoppingCart._id);
        } else {
          throw new Error("El producto no se encuentra en el carrito");
        }
      }

      // console.log("producto borrado exitosamente del carrito");
      return res
        .status(200)
        .json({ msg: "producto borrado exitosamente del carrito" });
    }
  } catch (error) {
    // console.error({     error: `Error deleting products to shopping cart:${error.message}`,   });
    return res.status(500).json({
      message: `Error deleting products to shopping cart: ${error.message}`,
    });
  }
};

module.exports = shoppingCartDelete;
