import React from 'react';
import { useRouter } from 'next/router';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { FaShoppingBag } from 'react-icons/fa';
import { recentOrders as orders } from "../../../utils/dashboard/admin/data";

function RecentOrders() {
  // LÓGICA DEL COMPONENTE
  const router = useRouter();

  const handleDetails = (id) => {
    router.push(`/dashboard/admin/ventas/${id}`);
  }


  // RENDERIZADO DEL COMPONENTE
  return (
    <div className='w-full col-span-1 relative h-[50vh] lg:h-[70vh] m-auto p-4 border rounded-lg bg-white overflow-scroll '>
      <h1>Ventas recientes</h1>
      <ul>
        {
          orders?.map((order, index) => {
            // Convertir la fecha a hora local
            const utc = new Date(order.date);
            const offset = utc.getTimezoneOffset();
            const local = new Date(utc.getTime() + (offset*60*1000));

            return (
            <li key={index} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer' onClick={() => handleDetails(order._id)}>
              <div 
                className={
                    `p-3 rounded-lg 
                    ${
                        order.orderStatus === "finalizada" 
                        ? 'bg-green-100' 
                        : 'bg-orange-100'
                    }
                    `
                }
              >
                <FaShoppingBag 
                    className={
                        `${
                            order.orderStatus === "finalizada" 
                            ? 'text-verde' 
                            : 'text-orange-400'
                        }`
                    } 
                
                />
              </div>
              <div className='pl-4'>
                <p className='text-gray-800 font-bold'>{`$ ${order.totalAmount}`}</p>
                <p className='text-gray-400 text-sm'>{order.userFirstname + " " + order.userLastname}</p>
              </div>
              <div>
                <p className='hidden xl:flex absolute right-6 text-sm px-2 '>{ formatDistanceToNow(local) }</p>
              </div>
            </li>
          )})
        }
      </ul>
    </div>
  )
};

export default RecentOrders;