const DBProductGetName = require("../../database/controllers/products/productGet/DBProductGetName");

const getProductByName = async (req, res) => {
  try {
    
    const name = req.query.name;

    if (name) {
      const product = await DBProductGetName(name);

      return res.status(200).json(product);
    }

    return res.status(404).json({ msg: "Error 404, not found" });
  } catch (err) {
    return res
      .status(500)
      .json({ error: err.message, msg: "Error al traer producto" });
  }
};

module.exports = getProductByName;
