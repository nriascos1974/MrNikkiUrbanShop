const bcrypt = require("bcrypt");
const checkUserExists = require("../../database/helper/DBcheckUserExists");

const recoveryPassword = async (req, res) => {

    try {
        const { email, password, code } = req.body;

        if (email && password && code) {

            const user = await checkUserExists(null, email);

            if (user) {
                if (code === user.recoverycode) {
                    //Hasheo la nueva contraseña y piso la anterior.
                    user.password = bcrypt.hashSync(password, 10);
                    //Una vez pisada la password, reseteo el campo con el codigo de recuperacion de contraseña.
                    user.recoverycode = null;
                    user.save();

                    const userData = {
                        id: user._id,
                        lastname: user.lastname,
                        firstname: user.firstname,
                        email: user.email,
                        adress: user.address,
                        products: user.products,
                        calification: user.calification,
                        phone: user.phone,
                    };

                    return res.status(200).json({
                        msg: "La contraseña se restablecio con exito!",
                        user: userData
                    })
                }

                return res.status(404).json({ msg: "El email ingresado no pertenece a un usuario registrado!" })
            }

            return res.status(401).json({ msg: "El codigo ingresado no es valido!" });
        }

        return res.status(401).json({ msg: "Faltan datos para poder procesar la solicitud!" });
    } catch(err){
        return res.status(500).json({error: err.message,
                                    msg: "Problemas de conexión en el servidor!"});
    }
}

module.exports = { recoveryPassword }