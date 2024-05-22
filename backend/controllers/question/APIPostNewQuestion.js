const DBQuestionPost = require('../../database/controllers/questions/questionPost/DBQuestionPost');

const postNewQuestion = async (req, res) =>{
    const {idProduct, idUser, question} = req.body;

    try{

        if (idProduct, idUser, question){

            const ques = await DBQuestionPost(idUser, {question}, idProduct);

            if (ques){
                return res.status(200).json({msg: "Pregunta creada con exito!", question: ques})
            }

            return res.status(404).json({msg: "Error el crear la pregunta!"});
        }

        return res.status(401).json({msg: "Faltan datos para poder procesar la solicitud"});

    }catch(err){
        return res.status(500).json({error: err.message,
                                    msg: "Problemas de conexión en el servidor!"});
    }
}

module.exports = {postNewQuestion}