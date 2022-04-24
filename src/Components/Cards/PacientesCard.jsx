import React from 'react'
import Button from '../Common/Button'

function PacientesCard({paciente, handleDelete, handleEdit}) {
    const{mascota, propietario, email, alta, sintomas}=paciente
   
  return (
    <div className='m-3 bg-white shadow-md py-3 px-3 rounded-xl w-full'>
    <div className='mb-1'>
      <p className='font-bold  text-gray-700 uppercase'>Nombre:</p>
      <span className='font-normal normal-case'>{mascota}</span>
    </div>
    <div className='mb-1'>
      <p className='font-bold  text-gray-700 uppercase'>Responsable de la mascota:</p>
      <span className='font-normal normal-case'>{propietario}</span>
    </div>
    <div className='mb-1'>
      <p className='font-bold text-gray-700 uppercase'>E-mail:</p>
      <span className='font-normal normal-case'>{email}</span>
    </div>
    <div className='mb-1'>
      <p className='font-bold  text-gray-700 uppercase'>Fecha de alta:</p>
      <span className='font-normal normal-case'>{alta}</span>
    </div>
    <div className='mb-1'>
      <p className='font-bold  text-gray-700 uppercase'>Sintomas:</p>
      <span className='font-normal normal-case'>
      {sintomas}
      </span>
    </div>
    <div className='flex justify-around'>
      <Button style='bg-indigo-600 hover:bg-indigo-700' fn={handleEdit} paciente={paciente}>Editar</Button>
      <Button style='bg-red-600 hover:bg-red-700' fn={handleDelete} paciente={paciente}>Eliminar</Button>
    </div>
  </div>
  )
}

export default PacientesCard