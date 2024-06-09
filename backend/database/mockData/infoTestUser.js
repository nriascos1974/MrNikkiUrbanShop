const bcrypt = require('bcrypt');

const users = [
    {
        "firstname": "Administrador",
        "lastname": "Aplicacion",
        "email": "mrnikkishop@gmail.com",
        "phone": 3147841250,
        "verified": true,
        "password": bcrypt.hashSync("admin1234", 10),
        "city": "646261f19a743f205356ea84",
        "address": "calle 33C #88A-93"
    }
]

module.exports = users;