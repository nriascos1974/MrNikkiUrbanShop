const express = require('express');
const router = express.Router();
const getAllDepartments = require('../database/controllers/departments/DBDepartmentsGetAll');
const getCitiesByDepartmentId = require('../database/controllers/departments/cities/DBCitiesGetByDepartment');

router.get('/departments', async (req, res) => {
        try {
            return res.status(200).json(await getAllDepartments());
        } catch (err){
            return res.status(500).json({error: err.message,
                                        msg: "Error de conexion!"});
        }
    }
    );

router.get('/departmentcities', (req, res, next) => { 

    const {id} = req.query;
    if (!id){
        return res.status(401).json({msg: "Faltan datos para poder continuar con la solicitud"});
    }
    next();

},async (req, res) => {
    try{
        const {id} = req.query;
        return res.status(200).json(await getCitiesByDepartmentId(id));
    } catch (err){
        return res.status(500).json({error: err.message,
            msg: "Error de conexion!"})
    }
    })

module.exports = router;