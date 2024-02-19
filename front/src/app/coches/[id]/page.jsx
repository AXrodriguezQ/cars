"use client"
import Footer from '@/components/Footer'
import InfoCar from '@/components/InfoCar'
import Navbar from '@/components/Navbar'
import React, { useEffect, useState } from 'react'

const page = ({params}) => {

    const [nombre, setNombre] = useState(null)
    const [imagen1, setImagen1] = useState(null)
    const [imagen2, setImagen2] = useState(null)
    const [imagen3, setImagen3] = useState(null)
    const [descripcion, setDescripcion] = useState(null)
    const [precio, setPrecio] = useState(null)
    
    useEffect(() => {
        fetch(`http://localhost:3000/api/coches/${params.id}`)
            .then(res => res.json())
            .then(data => {
                setImagen1(data.imagen1)
                setImagen2(data.imagen2)
                setImagen3(data.imagen3)
                setNombre(data.nombre)
                setDescripcion(data.info)
                setPrecio(data.precio)
            })
    }, [])

  return (
    <div>
        <Navbar />
        <InfoCar imagen1={imagen1} imagen2={imagen2} imagen3={imagen3} nombre={nombre} descripcion={descripcion} precio={precio} />
        <Footer />
    </div>
  )
}

export default page
