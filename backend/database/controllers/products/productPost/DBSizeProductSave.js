
const Size = require("../../../models/size");


const sizeProductSave = async (product, tallas) => {
    try {

        for(let talla of tallas){
        
        const newSize = new Size();

        console.log("Primera parte => "+newSize);

        newSize.products = product._id;
        newSize.size = talla;
        newSize.stock = product.stock;    

        await newSize.save()
        console.log("despues de guardar parte => "+newSize);
        }
        
        return true

    } catch (error) {
        throw Error(error.message)
    }
}

module.exports = sizeProductSave
