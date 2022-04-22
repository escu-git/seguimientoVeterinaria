import React from 'react'

function PacientesCard({paciente}) {
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
  </div>
  )
}

export default PacientesCard