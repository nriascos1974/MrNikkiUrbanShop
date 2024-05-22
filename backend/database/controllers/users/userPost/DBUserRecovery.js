const User = require("../../../models/user");
const {sendRecoveryEmail} = require('../../../../controllers/utils/emailService/emailSender.js')

module.exports = async (email) => {
    const user = await User.findOne({ email })

    if (user) {

     
            const recoverycode = "R"+Math.floor(Math.random() * 9999999) + 1;
            const userCodeRecovery= await User.findByIdAndUpdate(user._id,  {recoverycode} )
            
            await sendRecoveryEmail(email, recoverycode)
            return true
       
    }
    else {
        return user
    }
}

