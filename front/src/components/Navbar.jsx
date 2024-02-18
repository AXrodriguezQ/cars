import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='container flex justify-between items-center p-4 px-20'>
        <div className='flex justify-center items-center'>
            <svg className='flex w-8 text-sky-500' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
            </svg>
            <h2 className='text-xl font-bolder'>
                <Link href='/'>RentCar</Link>
            </h2>
        </div>
        <div>
            <button className='p-2 bg-blue-500 hover:bg-blue-700 transition-colors rounded-3xl px-4 text-white'>
                <Link href='/'>Ingresar</Link>
            </button>
        </div>
    </nav>
  )
}

export default Navbar
