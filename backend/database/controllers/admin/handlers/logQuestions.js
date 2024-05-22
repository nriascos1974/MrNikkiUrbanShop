const logQuestions = async (idquestion, document) => {
    try {
        console.log("entra")
        document.newquestions.push(idquestion)
        await document.save()
    } catch (error) {
        throw Error(error)
    }
}
module.exports = logQuestions