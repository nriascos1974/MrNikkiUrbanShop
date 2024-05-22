const checkUserExists = require("../../database/helper/DBcheckUserExists");
const DBUserVerified = require("../../database/controllers/users/userPost/DBUserVerified");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY;

const setVerified = async (req, res) => {
  const { email, code } = req.query;

  try {
    // al recibir token del front
    if (req.userId) {
      const userId = await checkUserExists(req.userId, null);
      //al recibir token y codigo
      if (code) {
        const verify = await DBUserVerified(userId.email, code);
        //si el codigo no es igual al enviado
        if (!verify) {
          return res.status(400).json({
            msg: "El codigo de verificación ingresado no es valido!",
            verified: false,
          });
        }

        //codigo match con el enviado
        else {
          const tokenPayload = { userId: userId._id };

          //generar token para el registro
          const token = jwt.sign(tokenPayload, JWT_PRIVATE_KEY);
          const userData = {
            id: userId._id,
            lastname: userId.lastname,
            firstname: userId.firstname,
            email: userId.email,
            adress: userId.address,
            products: userId.products,
            calification: userId.calification,
            phone: userId.phone,
          };

          return res.status(200).json({
            msg: "Usuario verificado exitosamente!",
            verified: true,
            token: token,
            user: userData,
          });
        }
      }
    }

    if (await DBUserVerified(email, code)) {
      /* OPCION 1: UNA VEZ VERIFICADO SE LOGGEA ACA AUTOMATICAMENTE
                OPCION 2: CUANDO EL FRONT RECIBE verified true, REDIRECCIONA AL USER A LA VENTANA DE LOGIN
            */
      //buscar el id del usuario
      const userId = await checkUserExists(null, email);
      const tokenPayload = { userId: userId._id };

      //generar token para el registro
      const token = jwt.sign(tokenPayload, JWT_PRIVATE_KEY);
      const userData = {
        id: userId._id,
        lastname: userId.lastname,
        firstname: userId.firstname,
        email: userId.email,
        adress: userId.address,
        products: userId.products,
        calification: userId.calification,
        phone: userId.phone,
      };

      return res.status(200).json({
        msg: "Usuario verificado exitosamente!",
        verified: true,
        token: token,
        user: userData,
      });
    }

    return res.status(400).json({
      msg: "El codigo de verificación ingresado no es valido!",
      verified: false,
    });
  } catch (err) {
    return res.status(500).json({
      error: err.message,
      msg: "Error 500! Problemas internos con la conexión del servidor.",
    });
  }
};

module.exports = { setVerified };
