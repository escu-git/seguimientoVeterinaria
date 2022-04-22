import {useState} from 'react'
import { idGen } from '../../Helpers/helpers';
import ShowError from '../Errors/ShowError';

function Formulario({setPacientes, pacientes}) {
    const[mascota, setMascota]=useState('');
    const[propietario, setPropietario]=useState('');
    const[email, setEmail]=useState('');
    const[alta, setAlta]=useState('');
    const[sintomas, setSintomas]=useState('');
    const[error, setError]=useState(false);

    const handleSubmit = (formData) =>{
        formData.preventDefault()
        const datos = [mascota, propietario, email, alta, sintomas];
        if(datos.includes('')){
            setError(true);
            return
        }
        setError(false);
        const nuevoPaciente = {
            id:idGen(),
            mascota,
            propietario,
            email,
            alta,
            sintomas
        };
        const listadoPacientes = [...pacientes, nuevoPaciente];
        setPacientes(listadoPacientes)
        setMascota('');
        setPropietario('');
        setEmail('');
        setAlta('');
        setSintomas('');
    }
    

  return (
    <div className='md:w-1/2 lg:w-2/5 text-center'>
    <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
    <p className='text-lg mt-5 text-center mb-10'>Añade pacientes y {''}
        <span className='text-indigo-600 font-bold'>Administralos</span>
    </p>
    <form className='bg-white shadow-md rounded-lg py-10 px-5' onSubmit={(e)=>handleSubmit(e)}>
        {error && <ShowError/>}

        <div className='mb-5'>
            <label htmlFor='nombre' className='block text-gray-700 uppercase font-bold'>Nombre mascota</label>
            <input value={mascota} className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md ' id='nombre' type='text' placeholder='Nombre de la mascota' onChange={(e)=>setMascota(e.target.value)} />
        </div>
        <div className='mb-5'>
            <label htmlFor='propietario' className='block text-gray-700 uppercase font-bold'>Responsable de la mascota</label>
            <input value={propietario} className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md ' id='propietario' type='text' placeholder='Nombre del responsable de la mascota' onChange={(e)=>setPropietario(e.target.value)} />
        </div>
        <div className='mb-5'>
            <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>E-mail</label>
            <input value={email} className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md ' id='email' type='email' placeholder='Dirección de correo electrónico' onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div className='mb-5'>
            <label htmlFor='fechaAlta' className='block text-gray-700 uppercase font-bold'>Fecha de alta</label>
            <input value={alta} className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md ' id='fechaAlta' type='date' onChange={(e)=>setAlta(e.target.value)} />
        </div>
        <div className='mb-5'>
            <label htmlFor='sintomas' className='block text-gray-700 uppercase font-bold'>Sintomas</label>
            <textarea value={sintomas} id='sintomas' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md ' placeholder='Describa los sintomas de la mascota' onChange={(e)=>setSintomas(e.target.value)} />
        </div>
        <input type='submit' className='bg-indigo-600 w-full p-3 uppercase font-bold hover:bg-indigo-500 text-white rounded-lg transition-colors mb-10 hover:shadow-lg' value='Añadir paciente'/>
    </form>
    </div>
  )
}

export default Formulario