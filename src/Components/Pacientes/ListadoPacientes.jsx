import React, { useEffect } from 'react'
import PacientesCard from '../Cards/PacientesCard'

function ListadoPacientes({pacientes}) {

  return (
      <div className='md:w-1/2 lg:w-3/5' >
        {<h2 className='font-black text-3xl text-center'>{pacientes && pacientes.length? 'Listado de pacientes': 'No hay pacientes cargados'}</h2>}
        <p className='text-xl mt-5 mb-10 text-center'> Administra tus {''}
        <span className='text-indigo-600 font-bold'>
        Pacientes y Citas
        </span></p>
       {pacientes?.map(paciente=><PacientesCard key={paciente.id} paciente={paciente}/>)}
      </div>
  )
}

export default ListadoPacientes