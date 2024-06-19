const Product = require("../../../models/product");
const Size = require("../../../models/size");

const DBProductGetId = async (id) => {
    try {
        const { user, ...info } = await Product.findById(id)
            .populate(["user", "questions"])
            .lean()

        const tallas = await Size.find({products:id})    
        // const userinfo =
        // {
        //     firstname: user.firstname,
        //     lastname: user.lastname,
        // }
        //info = {...info, size:tallas}
        const producto = {info, tallas}

        console.log(producto)

        return producto
        
    } catch (error) {
        throw Error(error.message)
    }
}

module.exports = DBProductGetId