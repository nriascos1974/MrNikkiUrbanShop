const checkUserExists = require('../../database/helper/DBcheckUserExists');

const getUserById = async (req, res) => {

    const {id} = req.query;

    try{
        
        const user = await checkUserExists(id, false, true);
       
        if (user){
            
            delete user.password;
            
            return res.status(200).json({msg: 'Usuario traido con exito', user});
        } 

        return res.status(404).json({msg: 'Error 404, not found '});
    } catch(err){
        return res.status(500).json({error: err.message, msg: 'Error en la solicitud de la base de datos'});
    }

}

module.exports = {getUserById}