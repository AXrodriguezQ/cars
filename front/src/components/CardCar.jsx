import React from 'react'

const CardCar = () => {
  return (
    <div className='bg-slate-100 rounded-2xl p-4 flex justify-between items-start flex-col w-80 hover:shadow-xl hover:bg-white duration-500'>
        <div>
            <h3 className='font-semibold text-xl'>Land Cruiser 300</h3>
        </div>
        <div>
            <img className='flex' src="https://www.toyota.com.co/wp-content/uploads/2021/08/LC-400X400_Mesa-de-trabajo-1.png" alt="" />
        </div>
        <div className='flex justify-between items-center w-3/4 m-auto'>
            <button className='bg-sky-300 font-semibold p-2 px-4 rounded-3xl hover:bg-sky-600 hover:text-white duration-300'>Ver mas</button>
            <button className='bg-green-300 font-semibold p-2 px-4 rounded-3xl hover:bg-green-600 hover:text-white duration-300'>Alquilar</button>
        </div>
    </div>
  )
}

export default CardCar
