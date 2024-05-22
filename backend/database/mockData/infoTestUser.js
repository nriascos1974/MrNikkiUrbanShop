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
    },
    {
        "firstname": "Fito",
        "lastname": "Paez",
        "email": "fitopaez@mail.com",
        "phone": 112233,
        "verified": true,
        "password": bcrypt.hashSync("1234", 10),
        "city": "646261f19a743f205356ea84",
        "address": "callefalsa 123"
    },
    {
        "firstname": "Julian",
        "lastname": "Alvarez",
        "email": "laarania@mail.com",
        "phone": 91218,
        "verified": true,
        "password": bcrypt.hashSync("1234", 10),
        "city": "646261f19a743f205356ea84",
        "address": "nuñez 123"
    },
    {
        "firstname": "Charly",
        "lastname": "Garcia",
        "email": "seminare@mail.com",
        "phone": 101213,
        "verified": true,
        "password": bcrypt.hashSync("1234", 10),
        "city": "646261f19a743f205356ea84",
        "address": "edificioalto 123"
    },
    {
        "firstname": "Carlos",
        "lastname": "Gardel",
        "email": "mibuenosairesquerido@mail.com",
        "phone": 445566,
        "verified": true,
        "password": bcrypt.hashSync("1234", 10),
        "city": "646261f19a743f205356ea84",
        "address": "laboca 123"
    },
    {
        "firstname": "Lionel",
        "lastname": "Messi",
        "email": "leomessi@mail.com",
        "phone": 778899,
        "verified": true,
        "password": bcrypt.hashSync("1234", 10),
        "city": "646261f19a743f205356ea84",
        "address": "callemessi 123"
    }
]

module.exports = users;