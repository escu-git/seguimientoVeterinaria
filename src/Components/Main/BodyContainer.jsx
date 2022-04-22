import {useState, useEffect} from 'react'
import Formulario from '../Forms/Formulario'
import ListadoPacientes from '../Pacientes/ListadoPacientes'

function BodyContainer() {
  const[pacientes, setPacientes]=useState([]);

  return (
    <div className='mt-12 md:flex'>
    <Formulario setPacientes={setPacientes} pacientes={pacientes}/>
    <ListadoPacientes pacientes={pacientes}/>
    </div>
  )
}

export default BodyContainer