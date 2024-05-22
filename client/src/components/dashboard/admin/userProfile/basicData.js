import React from 'react'
import { BsPersonFill } from 'react-icons/bs';

// AÚN EN DESARROLLO...
function BasicData({ name, lastname, status, verified, colSpan="col-span-1"}) {
  return (
    <div className={`${colSpan} bg-white flex justify-between w-full h-fit border p-4 rounded-lg`} >
        {/* Ícono de usuario */}
        <div className="p-3 rounded-full bg-green-100  " >
            <BsPersonFill className='text-4xl text-verde' />
        </div>
    </div>
  )
};

export default BasicData;