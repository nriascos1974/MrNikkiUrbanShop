const DBUserRecovery = require("../../database/controllers/users/userPost/DBUserRecovery");
require("dotenv").config();

const sendRecoveryCode = async (req, res) => {
    try{
        const {email} = req.query;

        if (email){
           
            const sended = await DBUserRecovery(email);

            if (sended){
                //Sended será true o false, dependiendo de la respuesta el front va al formulario de nueva contraseña o no
                return res.status(200).json({sended,
                    msg: "Codigo de recuperación enviado",
                    userEmail: email});
            }

            return res.status(500).json({msg: "No se pudo enviar el mail con el codigo de recuperación"});
        }

        return res.status(404).json({msg: "Error 404! Not found"});

    }catch(err){
        return res.status(500).json({error: err.message,
                                    msg: "Problemas de conexión en el servidor!"});
    }
}

module.exports = {sendRecoveryCode}