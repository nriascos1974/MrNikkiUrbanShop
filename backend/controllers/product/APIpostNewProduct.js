const productSave = require("../../database/controllers/products/productPost/DBProductSave");
const sizeProductSave = require("../../database/controllers/products/productPost/DBSizeProductSave");
const checkProductExists = require("../../database/helper/DBCheckProductExists");

const postNewProduct = async (req, res) => {
  try {
    //producto con todos los datos
    const { newProduct } = req;

    const idUser = newProduct.user;
    const tallas = newProduct.tallas.split(",");

    if (idUser && newProduct) {
      const postedProd = await productSave(newProduct, idUser);

      //Checkeo que el producto fue creado en la db
      if (checkProductExists(postedProd._id.toString())) {
        const postedSize = await sizeProductSave(postedProd, tallas);

       return res.status(200).json(postedProd);
      }

      return res.status(404).json({
        msg: "No se pudo cargar el nuevo producto, intentelo de nuevo",
      });
    }
  } catch (err) {
    console.log(err.message);
    return res
      .status(500)
      .json({ error: err.message, msg: "Error al cargar el producto" });
  }
};

module.exports = { postNewProduct };
