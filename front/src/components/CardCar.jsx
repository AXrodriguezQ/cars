"use client"
import { useRouter } from 'next/navigation'
import React from 'react'


const CardCar = ( {id, nombre, img} ) => {

  const router = useRouter();

  return (
    <div key={id} className='bg-slate-100 rounded-2xl p-4 flex justify-between items-start flex-col w-80 h-96 hover:shadow-xl hover:bg-white duration-500'>
        <div>
            <h3 className='font-semibold text-xl'>{nombre}</h3>
        </div>
        <div className='flex'>
            <img className='flex' src={img} alt="" />
        </div>
        <div className='flex justify-between items-center w-3/4 m-auto'>
            <button
              className='bg-sky-300 font-semibold p-2 px-4 rounded-3xl hover:bg-sky-600 hover:text-white duration-300'
              onClick={() => router.push('/coches/'+ id)}
              >Ver mas</button>
            <button className='bg-green-300 font-semibold p-2 px-4 rounded-3xl hover:bg-green-600 hover:text-white duration-300'>Alquilar</button>
        </div>
    </div>
  )
}

export default CardCar
