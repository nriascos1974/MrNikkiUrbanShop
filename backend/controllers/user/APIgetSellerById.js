const checkUserExists = require('../../database/helper/DBcheckUserExists');
const checkProductExists = require('../../database/helper/DBCheckProductExists');


const getUserByProdId = async (req, res) => {

    try{
        const {id} = req.query;

        if (id){
            const product = await checkProductExists(id);

            if (product){

                const idUser = product.user;
                const user = await checkUserExists(idUser, false, true);

                if (user){
                    return res.status(200).json(user);
                }   

                return res.status(404).json({msg: "Error 404! User not found"});
            }

            return res.status(404).json({msg: "Error 404! Product not found"});
        }

        return res.status(401).json({msg: "Faltan datos para poder realizar la operación!"});
        
    } catch (err){
        return res.status(500).json({error: err.message,
                                    msg: "Error de conexión en el servidor"});
    }
}

module.exports = {getUserByProdId}