const getSaleByIdDB = require('../../database/controllers/sales/DBGetSaleById');

const getSaleById = async (req, res) =>{

    try{

        const {id} = req.query;

        if (id){
            const sale = await getSaleByIdDB(id);

            if (sale){
                return res.status(200).json({
                    msg: "Venta traida con exito!",
                    sale
                })
            }

            return res.status(404).json({msg: "Error 404! Not found"})
        }

        return res.status(401).json({msg: "Faltan datos para poder realizar la operación!"});
        
    }catch(err){
        return res.status(500).json({
            error: err.message,
            msg: "Error de conexión en el servidor!"
        });
    }
}

module.exports = {getSaleById}