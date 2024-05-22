import React from 'react';
import { cardsData } from "../../../utils/dashboard/admin/data";

function TopCards() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-5 gap-4 p-4'>
        <div className='col-span-1 lg:col-span-2 bg-white flex justify-between w-full border p-4 rounded-lg '>
            <div className='flex flex-col w-full pb-4 '>
                <p className='text-2xl font-bold text-lila '>{`$ ${cardsData.sumSalesToday.toLocaleString()}`}</p>
                <p className='text-gray-600 '>Ventas de Hoy</p>
            </div>
        </div>
        <div className='col-span-1 lg:col-span-2 bg-white flex justify-between w-full border p-4 rounded-lg '>
            <div className='flex flex-col w-full pb-4 '>
                <p className='text-2xl font-bold text-lila '>{`# ${cardsData.sumActiveProducts.toLocaleString()}`}</p>
                <p className='text-gray-600 '>Productos Activos</p>
            </div>
        </div>
        <div className='bg-white flex justify-between w-full border p-4 rounded-lg '>
            <div className='flex flex-col w-full pb-4 '>
                <p className='text-2xl font-bold text-lila '>{`# ${cardsData.sumActiveUsers.toLocaleString()}`}</p>
                <p className='text-gray-600 '>Usuarios Activos</p>
            </div>
        </div>
    </div>
  )
};

export default TopCards;