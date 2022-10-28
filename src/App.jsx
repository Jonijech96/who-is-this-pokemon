import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Pokemon from './components/Pokemon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Pokemon />
    </div>
  )
}

export default App
