import React from 'react'

const Header = ({title}) => {
  return (
    <div className='flex justify-between px-4 pt-4'>
        <h2 className='text-base text-gray-800 font-semibold mt-0 '>{title}</h2>
        <h2 className='text-base text-gray-800 font-semibold mt-0 '>Admin</h2>
    </div>
  )
}

export default Header