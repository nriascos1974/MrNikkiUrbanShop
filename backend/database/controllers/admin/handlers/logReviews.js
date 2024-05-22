const Review = require("../../../models/review");

const logReviews = async (idreview, document) => {

    try {
        document.newreviews.push(idreview)
        await document.save()
    } catch (error) {
        throw Error(error)
    }
}
module.exports = logReviews