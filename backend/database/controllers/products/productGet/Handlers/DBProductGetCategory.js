const { Category } = require("../../../../models/category");
const Product = require("../../../../models/product");

// Funcion para filtrar por categoria y subcateroria


const DBProductGetCategory = async (maincategory, subcategory) => {
    try {
        if (subcategory !== null) {

            const products = await Category.findOne({ name: maincategory, subCategories: { $elemMatch: { name: subcategory } } }, { "subCategories.$": 1 })
                .populate("subCategories.products")
                .lean()
            return products
        }
        else {
            const products = await Category.findOne({
                name: maincategory
            })
                .populate("subCategories.products")
                .lean()
            return products
        }

    } catch (error) {
        throw Error(error.message)
    }
}
module.exports = DBProductGetCategory