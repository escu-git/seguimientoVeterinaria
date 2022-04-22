import React from 'react'
import PacientesCard from '../Cards/PacientesCard'

function ListadoPacientes({pacientes}) {
  
  const handleDelete = (e) =>{
      console.log(e)
  };
  const handleEdit = (e) =>{
    console.log(e)
  };
  return (
      <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll' >
        {<h2 className='font-black text-3xl text-center'>{pacientes && pacientes.length? 'Listado de pacientes': 'No hay pacientes cargados'}</h2>}
        <p className='text-xl mt-5 mb-10 text-center'> Administra tus {''}
        <span className='text-indigo-600 font-bold'>
        Pacientes y Citas
        </span></p>
       {pacientes?.map(paciente=><PacientesCard key={paciente.id} paciente={paciente} handleDelete={handleDelete} handleEdit={handleEdit}/>)}
      </div>
  )
}

export default ListadoPacientes