const User = require("../../../models/user");

const DBReviewGetAllFromVendor = async (userId) => {
    try {
        const reviewUser = await User.findById(userId)
            .select("reviewReceived")
            .populate("reviewReceived")
            .lean()
            .exec()
        return reviewUser

    } catch (error) {
        throw Error(error)
    }
}

module.exports = DBReviewGetAllFromVendor