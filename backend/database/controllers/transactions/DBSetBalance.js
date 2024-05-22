const Product = require("../../models/product");
const User = require("../../models/user");
const Wallet = require("../../models/wallet");

const DBSetBalance = async (idUser, price, set) => {
    try {

        const walletUser = await Wallet.findOne({ user: idUser })
        if (set === "pending") {
            walletUser.pendingBalance += price
        }
        else if (set === "receivable") {
            walletUser.pendingBalance -= price
            walletUser.receivableBalance += price
        }

        response = await walletUser.save()
        return response

    } catch (error) {
        console.log(error)
    }
}

module.exports = DBSetBalance