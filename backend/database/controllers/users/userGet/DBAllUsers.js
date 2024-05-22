const User = require('../../../models/user');

const getAllUsersDB = async () =>{
    try{
        const res = await User.find().populate('role', 'role')
                                    .populate('city', 'city')
                                    .populate({
                                        path: 'city',
                                        populate: {
                                            path: 'department',
                                            select: 'department -_id'
                                            // Selecciona el campo 'department' del departamento
                                        }
                                    }).lean();
        return res;

    }catch(err){
        throw new Error(`Error al traer a los usuarios ${err}`);
    }
}

module.exports = getAllUsersDB;