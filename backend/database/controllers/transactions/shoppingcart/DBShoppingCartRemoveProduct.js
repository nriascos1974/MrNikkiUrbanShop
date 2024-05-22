const User = require("../../../models/user");

const DBShoppingCartRemoveProduct = async (idUser, idProduct) => {
    try {
        const cartUser = await User.findByIdAndUpdate(idUser, { $pull: { "shoppingCart.products": { product: idProduct } } }, { returnDocument: "after" })
        return cartUser.shoppingCart
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = DBShoppingCartRemoveProduct;
