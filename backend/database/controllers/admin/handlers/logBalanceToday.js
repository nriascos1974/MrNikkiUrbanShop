const LogAdmin = require("../../../models/logadmin");

const logBalanceToday = async (order, value, document) => {
    try {
        document.salesbalance += value
        document.salesorder.push(order)
        await document.save()
        return document
    } catch (error) {
        throw Error(error)
    }
}


module.exports = logBalanceToday