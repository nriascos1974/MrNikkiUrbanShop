import React from 'react'

function CardBasic({ data, title, colSpan="col-span-1", dataColor='text-lila'}) {
  return (
    <div className={`${colSpan} bg-white flex justify-between w-full h-fit border p-4 rounded-lg`} >
        <div className='flex flex-col w-full pb-4 '>
            <p className={`text-2xl font-bold ${dataColor}`}>{data}</p>
            <p className='text-gray-600 '>{title}</p>
        </div>
    </div>
  )
};

export default CardBasic;