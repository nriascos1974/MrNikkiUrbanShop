const Product = require("../../../../models/product");

const handlerFilters = async (filters) => {
    searchproduct = Product.find({ active: "en venta" })
    searchproduct.setOptions({ lean: true })
    searchproduct.collection(Product.collection)
    if (filters.categories !== null) {
        searchproduct.where({ "category": filters.categories.category })
        if (filters.categories.subcategory !== null) searchproduct.where({ "subcategory": filters.categories.subcategory })
    }
    if (filters.status != null) searchproduct.or({ "state": { $in: filters.status.map((term) => new RegExp(term, 'i')) } })
    if (filters.price !== null) {
        if (filters.price.min !== null) searchproduct.where("price").gte(filters.price.min)
        if (filters.price.max !== null) searchproduct.where("price").lte(filters.price.max)
    }

    const products = await searchproduct.exec()

    return products
}

module.exports = handlerFilters