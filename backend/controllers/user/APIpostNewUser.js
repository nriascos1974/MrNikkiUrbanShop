//bcrypt es una libreria que se utiliza para encriptar y desencritpar contraseñas o texto
const bcrypt = require("bcrypt");
const createUser = require("../../database/controllers/users/userPost/DBUserCreate");
const checkUserExists = require("../../database/helper/DBcheckUserExists");
const DBUserVerified = require(
  "../../database/controllers/users/userPost/DBUserVerified"
);
require("dotenv").config();
const jwt = require("jsonwebtoken");
const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY;

//Si el nuevo usuario se postea esta funcion retornará al usuario en si, si no retorna false
const postNewUser = async (req, res) => {
  const userData = req.body;

  /*  Con la función hashSyn de bcrypt me aseguro de encriptar la contraseña hasheandola 
       Esta funcion toma dos parametros, el string a hashear/encriptar y el numero de rondas (iteraciones) que hará para encriptar ese string enviado.
       Cuantas mas iteraciones se hagan, mas segura sera la contraseña (mas dificil de desencriptar) pero a su vez se sacrifica rendimiento.
       Un total de 10 iteraciones son las recomendadas para hashear una password
   */

  userData.password = bcrypt.hashSync(userData.password, 10);
  userData.calification = 0;

  try {
   
    //verificiar si el usuario existe
    const verify = await checkUserExists(null, userData.email);
    if (!verify) {
        //crear usuario
        const newUser = await createUser(userData);

        //enviar email con codigo
        const codeSend = await DBUserVerified(userData.email, null);

        //buscar el id del usuario
        const userId = await checkUserExists(newUser._id);
        const tokenPayload = { userId: userId._id };

        //generar token para el registro
        const token = jwt.sign(tokenPayload, JWT_PRIVATE_KEY);
   

        //enviar el front
        return res.status(200).json({codeSend:codeSend,token:token})
    }
   // const newUser = await createUser(userData);
    // if (await checkUserExists(newUser._id)) {
    //   return res.status(200).json(newUser);
    // }

    // return res
    //   .status(500)
    //   .json({
    //     msg: "Se produjo un error interno en el servidor. Inténtelo de nuevo más tarde.",
    //   });
  } catch (err) {
    return res.status(500).json({
      error: err.message,
      msg: "Error con la conexón a la base de datos " + err.message
    });
  }
};

module.exports = { postNewUser };
