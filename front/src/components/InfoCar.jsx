import React from 'react'

const InfoCar = ( {imagen1, imagen2, imagen3, nombre, descripcion, precio} ) => {
  return (
    <section className='container flex justify-between items-center p-4 px-20 flex-col'>
            <div className='w-full flex justify-between items-center'>
                {imagen1 && <img className='flex w-1/3' src={imagen1} alt="" />}
                {imagen2 && <img className='flex w-1/3' src={imagen2} alt="" />}
                {imagen3 && <img className='flex w-1/3' src={imagen3} alt="" />}
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex w-1/2 h-1/2 flex-col gap-8 justify-between items-start text-xl'>
                    <h1 className='flex font-semibold'>{nombre}</h1>
                    <p>{descripcion}</p>
                </div>
                <div className='w-1/2 flex justify-center items-center text-6xl font-bold'>
                    <h2>${precio}/dia</h2>
                </div>
            </div>
        </section>
  )
}

export default InfoCar
