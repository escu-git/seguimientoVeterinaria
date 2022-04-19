import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import ListadoPacientes from './Components/ListadoPacientes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <ListadoPacientes/>
    </div>
  )
}

export default App
