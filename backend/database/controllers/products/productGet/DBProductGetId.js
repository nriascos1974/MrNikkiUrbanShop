const Product = require("../../../models/product");

const DBProductGetId = async (id) => {
    try {
        const { user, ...info } = await Product.findById(id)
            .populate(["user", "questions"])
            .lean()
        // const userinfo =
        // {
        //     firstname: user.firstname,
        //     lastname: user.lastname,
        // }
        return info
    } catch (error) {
        throw Error(error.message)
    }
}

module.exports = DBProductGetId