const checkUserExists = require('../database/helper/DBcheckUserExists');
const {login} = require('../controllers/user/APILoginUser');
const jwt = require("jsonwebtoken");


//Middleware para autologear a un usuario, este mw no debe generar un nuevo token ya que utiliza el ya asignado para loggearse de forma automatica
const checkUserEmail = async (req, res, next) => {
   
    try {

      // Obtengo el mail del usuario por query
      const {email} = req.query;
      //Regex para verificar que un mail es valido
      const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      
      if (!email || !email.match(regex)) {
        
        return res.status(401).json({ msg: 'Debes ingresar un email valido' });
      }
   
     
      // Buscar el usuario asociado al email ingresado
      const user = await checkUserExists(null, email);

      if (!user) {
        //Si no existe un usuario asociado al email ingresado, retorna error 401 con su respectivo mensaje
        return res.status(401).json({ msg: 'El email ingresado no pertenece a ningun usuario registrado' });
      }
     
      //Si esta todo ok, le doy el paso al controller
      next();
    } catch (error) {
      return res.status(500).json({ msg: 'Ocurrió un error al iniciar sesión automáticamente ' + error.message });
    }

}

module.exports = {checkUserEmail}