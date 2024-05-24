const bcrypt = require('bcrypt');

const users = [
    {
        "firstname": "Admin",
        "lastname": "Admin",
        "email": "administrador@mail.com",
        "phone": 112233,
        "verified": true,
        "password": bcrypt.hashSync("admin1234", 10),
        "city": "646261f19a743f205356ea84",
        "address": "calleAdministrada 123"
    }
]

module.exports = users;