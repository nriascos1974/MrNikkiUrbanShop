const User = require("../../../models/user");

const DBUserLogin = async (email) => {
    const userlogin = await User.findOne({ email })
    return userlogin
}

module.exports = DBUserLogin