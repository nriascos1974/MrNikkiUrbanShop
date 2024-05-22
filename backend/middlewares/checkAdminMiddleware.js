const checkUserExists = require('../database/helper/DBcheckUserExists');
require("dotenv").config();
const jwt = require("jsonwebtoken");

const checkIsAdmin = async (req, res, next) => {

    try{

        // Verificar si hay un token válido almacenado en el localStorage del navegador
      const token = req.headers.authorization.split(' ')[1];
      
      if (!token) {
        
        return res.status(401).json({ msg: 'Debes iniciar sesión para acceder a esta página' });
      }
   
      // Verificar si el token es válido
      const decodedToken = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
      console.log(decodedToken);
   
      if (!decodedToken) {
        
        return res.status(401).json({ msg: 'Debes iniciar sesión para acceder a esta página' });
      }
  
      // Buscar el usuario asociado con el token en la base de datos
      const user = await checkUserExists(decodedToken.userId);

      if (!user) {
        
        return res.status(401).json({ msg: 'Debes iniciar sesión para acceder a esta página' });
      }

      if (user.role['role'] !== "admin"){
        return res.status(403).json({ msg: 'No tienes permiso para acceder a esta pagina' });
      }

    next();

    }catch (err){
        return res.status(500).json({error: err.message,
                                    msg: "Error de conexión en el servidor!"});
    }
}

module.exports = {checkIsAdmin}