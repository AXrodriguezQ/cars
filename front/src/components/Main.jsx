import React from 'react'

const Main = () => {
  return (
    <main className='p-4 px-20 mt-8 flex justify-between items-center'>
        <div className='w-1/2 space-y-8'>
            <h1 className='font-bold text-7xl'>exclusivos, rentables y son tus preferidos!</h1>
            <p className='text-2xl'>Tenemos un rentablke sistema de alquiler de coches de alta gama para todas tus necesidades.</p>
            <button className='p-2 bg-blue-500 hover:bg-blue-700 transition-colors rounded-3xl px-4 text-white'>Ver coches</button>
        </div>
        <div>
            <img src="https://www.toyota.com.co/wp-content/uploads/2023/11/5-1.png" alt="" />
        </div>
    </main>
  )
}

export default Main
