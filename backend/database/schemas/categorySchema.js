const { Schema } = require("mongoose")

// const productCategorySchema = new Schema({
//     name: {
//         type: String,
//         required: true,
//         validate: {
//             validator: async function (value) {
//                 const subCategory = this.parent();
//                 const categoryIndex = subCategory.productCategories.findIndex(
//                     (category) => category._id.toString() === this._id.toString()
//                 );
//                 const categoryNames = subCategory.productCategories
//                     .filter((category, index) => index !== categoryIndex)
//                     .map((category) => category.name);
//                 return !categoryNames.includes(value);
//             },
//             message: 'El nombre de la categoría ya existe dentro de la subcategoría',
//         },
//     },
//     products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
// });


const subCategorySchema = new Schema({
    name: {
        type: String,
        required: true,
        validate: {

            // FALTA ADMINISTRACION DE ERRORES
            validator: async function (value) {
                const subCategory = this.parent();
                const categoryIndex = subCategory.subCategories.findIndex(
                    (category) => category._id.toString() === this._id.toString()
                );
                const categoryNames = subCategory.subCategories
                    .filter((category, index) => index !== categoryIndex)
                    .map((category) => category.name);
                return !categoryNames.includes(value);
            },
            message: 'El nombre de la categoría ya existe dentro de la subcategoría',
        },
    },
    id: Schema.Types.ObjectId,
    products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
}, { versionKey: false })

const mainCategorySchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    id: Schema.Types.ObjectId,
    subCategories: [subCategorySchema]
}, { versionKey: false })

module.exports = mainCategorySchema