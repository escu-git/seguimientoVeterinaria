import React from 'react'

function Formulario() {
  return (
    <div className='md:w-1/2 lg:w-2/5 text-center'>
    <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
    <p className='text-lg mt-5 text-center mb-10'>Añade pacientes y {''}
        <span className='text-indigo-600 font-bold'>Administralos</span>
    </p>
    <form className='bg-white shadow-md rounded-lg py-10 px-5'>
        <div className='mb-5'>
            <label htmlFor='nombre' className='block text-gray-700 uppercase font-bold'>Nombre mascota</label>
            <input className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md ' id='nombre' type='text' placeholder='Nombre de la mascota'/>
        </div>
        <div className='mb-5'>
            <label htmlFor='propietario' className='block text-gray-700 uppercase font-bold'>Responsable de la mascota</label>
            <input className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md ' id='propietario' type='text' placeholder='Nombre del responsable de la mascota'/>
        </div>
        <div className='mb-5'>
            <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>E-mail</label>
            <input className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md ' id='email' type='email' placeholder='Dirección de correo electrónico'/>
        </div>
        <div className='mb-5'>
            <label htmlFor='fechaAlta' className='block text-gray-700 uppercase font-bold'>Fecha de alta</label>
            <input className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md ' id='fechaAlta' type='date' />
        </div>
        <div className='mb-5'>
            <label htmlFor='sintomas' className='block text-gray-700 uppercase font-bold'>Fecha de alta</label>
            <textarea id='sintomas' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md ' placeholder='Describa los sintomas de la mascota' />
        </div>
        <input type='submit' className='bg-indigo-600 w-full p-3 uppercase font-bold hover:bg-indigo-500 text-white rounded-lg transition-colors mb-10 hover:shadow-lg' value='Añadir paciente'/>
    </form>
    </div>
  )
}

export default Formulario