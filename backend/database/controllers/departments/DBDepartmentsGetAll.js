const Department = require('../../models/department');

const getAllDepartments = async () => {

    try{
        const res = await Department.find().lean();

        return res;
    } catch(err){
        throw new Error (`Error al obtener los departamentos ${err}`);
    }
}

module.exports = getAllDepartments