const { Category } = require("../../../models/category");

const DBCategoryGetAll = async () => {
    try {
        const categories = await Category.find().lean()
        return categories

    } catch (error) {
        throw Error(error.message)
    }
}

module.exports = DBCategoryGetAll