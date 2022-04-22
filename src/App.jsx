import { useState } from 'react'
import './App.css'
import BodyContainer from './Components/Main/BodyContainer'
import Formulario from './Components/Forms/Formulario'
import Header from './Components/Header/Header'
import ListadoPacientes from './Components/Pacientes/ListadoPacientes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container mx-auto'>
      <Header/>
      <BodyContainer/>
    </div>
  )
}

export default App
