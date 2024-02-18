import React from 'react'
import NavSection from './NavSection'
import CardCar from './CardCar'

const Section = () => {
  return (
    <section className='container p-4 px-20 mt-8'>
        <NavSection />
        <div className='flex gap-4 flex-wrap mt-8'>
        <CardCar />
        <CardCar />
        <CardCar />
        <CardCar />
        <CardCar />
        </div>
    </section>
  )
}

export default Section
