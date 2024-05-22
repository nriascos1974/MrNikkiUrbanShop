const fs = require('fs');
const path = require('path');
const productSave = require('../controllers/products/productPost/DBProductSave');
const createUser = require('../controllers/users/userPost/DBUserCreate');
const User = require('../models/user');
const Question = require('../models/question');
const Product = require('../models/product');
const Department = require('../models/department');
const City = require('../models/city');
const Role = require('../models/role');
const DBQuestionPost = require('../controllers/questions/questionPost/DBQuestionPost');
const DBQuestionReply = require('../controllers/questions/questionPost/DBQuestionReply');
const users = require('./infoTestUser');


const departmentsTest = async () => {
    const departments = fs.readFileSync(path.resolve(__dirname, 'infoColombia.json'), 'utf8');
    const data = JSON.parse(departments);

    for (let department of data.colombia) {

        let newDepartment = await Department.findOne({ codeDane: department.c_digo_dane_del_departamento });


        // Si el departamento no existe, créalo
        if (!newDepartment) {
            newDepartment = new Department({
                codeDane: department.c_digo_dane_del_departamento,
                department: department.departamento,
            });
            newDepartment.save().then(() => {
                console.log("Departamento generado exitosamente!")
            })
                .catch((err) => {
                    console.error(err);
                });
        }

        let newCity = await City.findOne({codeDane : department.c_digo_dane_del_municipio});

        // Crea la city
        if (!newCity){
            newCity = new City({
                codeDane: department.c_digo_dane_del_municipio,
                city: department.municipio,
                department: newDepartment._id,
            });
            newCity.save().then(() => {
                console.log("Ciudad generada exitosamente")
            })
                .catch((err) => {
                    console.error(err);
                });
        }
       

    }
}

const productTest = async () => {
    const productsData = fs.readFileSync(path.resolve(__dirname, 'infoTestProduct.json'), 'utf8');
    const data = JSON.parse(productsData);
    const userId = await User.findOne({ email: "laarania@mail.com" })
    for (let element of data.products) {
        await productSave(element, userId._id)

    }
}

const rolesTest = async () => {
    const roles = ["user", "admin", "moderator"];

    for (const rol of roles){
        let newRole = new Role ({role: rol});
        await newRole.save();
    }
}

const userTest = async () => {
   
    const data = users;
    const userRole = await Role.findOne().where({role: "user"});
    const adminRole = await Role.findOne().where({role: "admin"});

    for (let element of data) {
        let user = await createUser(element);
        user.verified = true;
        if (user.firstname.toLowerCase() === "admin"){
            user.role = adminRole._id;
        } else{
            user.role = userRole._id;
        }
        
        user.save();
    }
}

const QuestionTest = async () => {
    const vendorId = await User.findOne({ email: "laarania@mail.com" })
    const userId = await User.findOne({ email: "fitopaez@mail.com" })
    const productId = await Product.findOne()

    const Question = {
        question: "Soy una pregunta random",
        date: Date()
    }
    const Reply = {
        answer: "Soy una respuesta random a una pregunta random",
        date: Date()
    }
    for (let cont = 0; cont < 10; cont++) {

        const questionId = await DBQuestionPost(userId._id, Question, productId._id)
        await DBQuestionReply(vendorId._id, Reply, questionId._id)
    }
}

module.exports = { productTest, userTest, QuestionTest, departmentsTest, rolesTest }