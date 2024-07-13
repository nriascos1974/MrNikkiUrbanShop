const Order = require("../../models/order");
const Product = require("../../models/product");
const Size = require("../../models/size");
const User = require("../../models/user");
const LogAdminController = require("../admin/LogAdminController");
const DBSetBalance = require("./DBSetBalance");

const DBPurchasedProducts = async (idUser) => {
    try {
        const shoppingCartProducts = await User.findById(idUser).select(["shoppingCart", "purchased"])
        const stockProducts = []
        const stockInventario = []
        const outStock = []
        const newOrder = new Order({ user: shoppingCartProducts._id })
        if (shoppingCartProducts.shoppingCart.products.length === 0) {
            throw Error("No hay ningun producto en el carrito")

        }
        for (let element of shoppingCartProducts.shoppingCart.products) {
            let product = await Product.findById(element.product).select(["stock", "purchasedBy", "price", "user"])
            let Inventario = await Size.findOne({ products: element.product, size: element.size })
            if (Inventario.stock < element.ammount) {
                outStock.push(product)
            }
            else {

                Inventario.stock -= element.ammount
                product.purchasedBy.push({ user: shoppingCartProducts._id, ammount: element.ammount })
                // if (Inventario.stock === 0) {
                //     product.active = "agotado"
                // }
                //total: cantidad de productos multiplicada por el 
                //precio ya que los productos dentro del shooping no se repiten
                const total = product.price * element.ammount;
                await DBSetBalance(product.user, total, "pending")
                stockProducts.push(product)
                stockInventario.push(Inventario)
            }
        }
        if (outStock.length !== 0) {
            throw ("productos sin stock suficiente: " + outStock)
        }
        for (element of stockProducts) {
            element.save()
        }
        for (element of stockInventario) {
            element.save()
        }
        newOrder.products = shoppingCartProducts.shoppingCart.products
        newOrder.totalprice = shoppingCartProducts.shoppingCart.totalprice
        shoppingCartProducts.purchased.push(newOrder._id)
        LogAdminController(newOrder._id, shoppingCartProducts.shoppingCart.totalprice, "balance")
        shoppingCartProducts.shoppingCart = {}
        newOrder.creationdate = new Date()
        const response = await newOrder.save()
        shoppingCartProducts.save()
        return response
    } catch (error) {
        throw Error(error)
    }
}


module.exports = DBPurchasedProducts