const mongoose = require("mongoose")
const mainCategorySchema = require("../schemas/categorySchema");

// Instanciacion de categorias principales y secundarias
//FALTA ADMINISTRACION DE ERROR

const Category = mongoose.model("Category", mainCategorySchema)

const createMainCategories = async () => {

    const stateCategories = await Category.find()

    if (stateCategories.length != 0) return

    const Hombre = new Category({
        name: "Hombre",
        subCategories: [
            { name: "Busos" },
            { name: "Chompas" },
            { name: "Conjuntos" },
            { name: "Camisetas" },
            { name: "Camisetas Oversize" },
            { name: "Pantalonetas" },
        ]
    })
    const Mujer = new Category({
        name: "Mujer",
        subCategories: [
            { name: "Busos" },
            { name: "Chompas" },
            { name: "Conjuntos" },
            { name: "Camisetas" },
            { name: "Camisetas Oversize" },
            { name: "Pantalonetas" },
        ]
    })
    const Sale = new Category({
        name: "Sale",
        subCategories: [
            { name: "Busos" },
            { name: "Chompas" },
            { name: "Conjuntos" },
            { name: "Camisetas" },
            { name: "Camisetas Oversize" },
            { name: "Pantalonetas" },
        ]
    })
    
    const newCategories = await Category.insertMany([Hombre, Mujer, Sale])

}

module.exports = { createMainCategories, Category }
