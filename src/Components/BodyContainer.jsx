import React from 'react'
import Formulario from './Formulario'
import Header from './Header'
import ListadoPacientes from './ListadoPacientes'

function BodyContainer() {
  return (
    <div className='mt-12 md:flex'>
    <Formulario/>
    <ListadoPacientes/>
    </div>
  )
}

export default BodyContainer