const checkUserExists = require("../../database/helper/DBcheckUserExists");
const checkProductExists = require("../../database/helper/DBCheckProductExists");
const DBShoppingCartAddProduct = require("../../database/controllers/transactions/shoppingcart/DBShoppingCartAddProduct");
const DBShoppingCartGet = require("../../database/controllers/transactions/shoppingcart/DBShoppingCartGet");
const DBUpdateProductInShoppingCart = require("../../database/controllers/transactions/shoppingcart/DBUpdateProductInShoppingCart");

const shoppingCart = async (req, res) => {
  try {
    const productsShoppingCart = req.body;
    const userId = req.userId;

    // buscar el usuario
    let dataUser = await checkUserExists(userId, null);

    if (dataUser) {
      // Obtener el objeto de usuario actualizado de la base de datos antes de modificarlo
      const products = await Promise.all(
        productsShoppingCart.map(async (product) => {
          const realProduct = await checkProductExists(product.id);
          if (realProduct) {
            // console.log(userId)
            const productsShopping = await DBShoppingCartGet(userId);

            //Si ya hay productos en el carrito
            if (productsShopping.shoppingCart === undefined) {
              // console.log("carrito vacio");

              await DBShoppingCartAddProduct(
                userId,
                product.id,
                product.amount,
                product.size
              );
            } else {
              // console.log(productsShopping.shoppingCart.products);
              // console.log(product);

              const alreadyInCart = productsShopping.shoppingCart.products.some(
                (item) =>
                  item.product._id.equals(product.id) &&
                  item.size == product.size
              );

              //el producto no esta en el carrito
              if (!alreadyInCart) {
                // console.log(
                //   "No esta el producto aun en el carrito del usuario"
                // );

                await DBShoppingCartAddProduct(
                  userId,
                  product.id,
                  product.amount,
                  product.size
                );
              }
              //El producto esta en el carrito
              else {

                const productAmount = productsShopping.shoppingCart.products.find(
                  (item) =>
                    item.product._id.equals(product.id) &&
                    item.size == product.size
                );

                // console.log(
                //   "se actualizo correctamente la cantidad del producto"
                // );
                

                const newAmmount = parseInt(productAmount.ammount) + parseInt(product.amount);
                // console.log(newAmmount);


                // const newValues = { ammount: product.amount };
                await DBUpdateProductInShoppingCart(
                  userId,
                  product.id,
                  newAmmount,
                  product.size
                );
                // await DBShoppingCartAddProduct(userId, product.id, product.amount,newValues);
              }
            }
          }
        })
      );

      console.log("producto agregado exitosamente al carrito");
      return res
        .status(200)
        .json({ msg: "producto agregado exitosamente al carrito" });
    }
  } catch (error) {
    console.error({
      error: `Error adding products to shopping cart:${error.message}`,
    });
    return res.status(500).json({
      message: `Error adding products to shopping cart: ${error.message}`,
    });
  }
};

module.exports = shoppingCart;
