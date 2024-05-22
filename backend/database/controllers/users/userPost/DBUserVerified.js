const User = require("../../../models/user");
const {sendWelcomeEmail} = require('../../../../controllers/utils/emailService/emailSender.js')

module.exports = async (email, query) => {
    const user = await User.findOne({ email })

    if (user?.verified === false) {

        if (query === null) {
            const codeverified = Math.floor(Math.random() * 900000) + 100000;
            const usercodevalidate = await User.findByIdAndUpdate(user._id, { codeverified })
            // aca iria el codigo para enviar el mail
            // console.log(codeverified,user.codeverified);
            // console.log(usercodevalidate);
            await sendWelcomeEmail(email,codeverified)
            return true
        }
        else {
            if (user.codeverified == query) {
                const verifiedUpdate = await User.findByIdAndUpdate(user._id, { verified: true })
                return verifiedUpdate
            }
            else {
                return false
            }
        }
    }
    else {
        return user
    }
}

