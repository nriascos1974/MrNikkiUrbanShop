const DBCategoryGetAll = require("../../database/controllers/categories/categoriesGet/DBCategoryGetAll");

const getAllCategories = async (req, res) => {
  try {
    const categories = await DBCategoryGetAll();

    if (categories) {
      return res.status(200).json(categories);
    }

    return res.status(404).json({ msg: "Error 404, not found" });
  } catch (err) {
    return res.status(500).json({
      error: err.message,
      msg: `¡Error al traer las categorias!`,
    });
  }
};

module.exports = getAllCategories;
