import { useState } from 'react'
import './App.css'
import BodyContainer from './Components/BodyContainer'
import Formulario from './Components/Formulario'
import Header from './Components/Header'
import ListadoPacientes from './Components/ListadoPacientes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='mx-auto'>
      <Header/>
      <BodyContainer/>
    </div>
  )
}

export default App
