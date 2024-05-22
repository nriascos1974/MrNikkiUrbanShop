const logicBanProduct = require('../../database/controllers/products/productDelete/DBProductLogicBan');

const banProductById = async (req, res) =>{
    try{
        const {id} = req.body;
        
        if (id){
            const product = await logicBanProduct(id)

            if (product){
                return res.status(200).json({msg : "Producto bloqueado con exito", product});
            }

            return res.status(404).json({msg : "Error 404, not found"});
            
        }

        return res.status(401).json({msg : "Faltan datos para poder procesar la solicitud"})
    } catch (err){
        return res.status(500).json({error: err.message, msg: "Error al eliminar el producto"});
    }
}

module.exports = {banProductById}