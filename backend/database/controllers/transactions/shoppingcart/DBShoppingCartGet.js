const User = require("../../../models/user");

const DBShoppingCartGet = async (idUser) => {

    try {
        const ShoppingCartuser = await User.findById(idUser)
            .select("shoppingCart")
            .populate("shoppingCart.products.product")
            .lean()
        return ShoppingCartuser
    } catch (error) {
        console.log(error)
    }
}
module.exports = DBShoppingCartGet