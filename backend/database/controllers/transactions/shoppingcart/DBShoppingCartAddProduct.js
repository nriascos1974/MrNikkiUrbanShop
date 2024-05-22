const Product = require("../../../models/product");
const User = require("../../../models/user");

const DBShoppingCartAddProduct = async (idUser, idProduct, ammount, price) => {
    try {
        const cartUser = await User.findByIdAndUpdate(idUser, { $push: { "shoppingCart.products": { product: idProduct, ammount } } }, { returnDocument: "after" })
        const productprice = await Product.findById(idProduct).select("price")
        cartUser.shoppingCart.totalprice += productprice.price
        await cartUser.save()
        return cartUser.shoppingCart
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = DBShoppingCartAddProduct