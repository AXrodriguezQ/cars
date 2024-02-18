import React from 'react'

const NavSection = () => {
  return (
    <div className='container flex justify-between items-center p-2 my-4'>
        <h2 className='text-xl font-bold'>Nuestros coches</h2>
        <input className='border-slate-200 border-2 p-2 w-96 rounded-3xl px-4' type="search" name="" id="" placeholder='busca tu coche aqui...' />
        <div className='flex gap-4'>
            <label htmlFor="" className='font-semibold'>Tiempo:</label>
                <select name="" id="">
                <option value="" >Un dia</option>
                <option value="" >Un mes</option>
                <option value="" >Un año</option>
            </select>
        </div>
        <div className='flex gap-4'>
            <label htmlFor="" className='font-semibold'>Precio:</label>
            <select name="" id="">
                <option value="" >1.000.000</option>
                <option value="" >2.000.000</option>
                <option value="" >3.000.000</option>
                <option value="" >4.000.000</option>
                <option value="" >5.000.000</option>
                <option value="" >10.000.000</option>
            </select>
        </div>
    </div>
  )
}

export default NavSection
