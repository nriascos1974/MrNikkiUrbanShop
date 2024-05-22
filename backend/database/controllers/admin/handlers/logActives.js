const LogAdmin = require("../../../models/logadmin");
const Product = require("../../../models/product");
const User = require("../../../models/user");

const logActives = async (option, element, document) => {
    try {
        if (option === null) {
            document.activeproducts = await Product.countDocuments({ active: "en venta" })
            document.activeusers = await User.countDocuments({ state: "activo" })
        }
        else if (option === "users") {
            document.activeusers += 1
            document.newusers.push(element)

        }
        else if (option === "products") {
            document.activeproducts += 1
            document.newproducts.push(element)
        }
        document.save()

    } catch (error) {
        throw Error(error)
    }
}

module.exports = logActives