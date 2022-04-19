import React from 'react'

function ListadoPacientes() {
  return (
      <div className='w-1/2 lg:w-3/5' >
    <h2 className='font-black text-3xl text-center'>Listado pacientes</h2>
    <p className='text-xl mt-5 mb-10 text-center'> Administra tus {''}
    <span className='text-indigo-600 font-bold'>
    Pacientes y Citas
    </span></p>
    <div className='m-3 bg-white shadow-md py-10 px-5 rounded-xl'>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre:</p>
        <span className='font-normal normal-case'>Hook</span>
    </div>
      </div>
  )
}

export default ListadoPacientes