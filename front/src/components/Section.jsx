import React from 'react'
import NavSection from './NavSection'
import CardCar from './CardCar'

const getCoches = async () => {
    const res = await fetch('http://localhost:3000/api/coches')
    const data = await res.json()
    
    return data
}

const Section = async () => {

    const coches = await getCoches()

  return (
    <section className='container p-4 md:px-20 sm:px-4 mt-8'>
        <NavSection />
        <div className='flex gap-4 flex-wrap mt-8'>
            {
                coches.map(coche => (
                    <CardCar key={coche.id} id={coche.id} nombre={coche.nombre} img={coche.imagen1} />
                ))
            }
        </div>
    </section>
  )
}

export default Section
