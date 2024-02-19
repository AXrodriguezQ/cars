"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React, { useEffect, useState } from 'react'

const page = ( {params} ) => {

  const [nombre, setNombre] = useState(null)
  const [precio, setPrecio] = useState(null)
  const [imagen1, setImagen1] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:3000/api/coches/${params.id}`)
      .then(res => res.json())
      .then(data => {
          setImagen1(data.imagen1)
          setNombre(data.nombre)
          setPrecio(data.precio)
      })
  }, [])

  return (
    <div>
      <Navbar />
      <section className='container flex justify-between gap-12 items-center p-4 md:px-20 sm:px-4 flex-col'>
        <img src={imagen1} alt="" />
        <h1 className='text-5xl sm:text-8xl font-bold'>{nombre}</h1>
        <h3 className='text-6xl font-semibold'>${precio}</h3>
        <button className='flex p-2 rounded-3xl px-8 bg-green-400 font-semibold text-white hover:bg-green-700 hover:font-bold'>aceptar</button>
      </section>
      <Footer />
    </div>
  )
}

export default page
