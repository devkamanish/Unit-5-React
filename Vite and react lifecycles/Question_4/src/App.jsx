import { useState } from 'react'
import './App.css'
import AutoCorrectApp from './components/AutoCorrectApp'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <AutoCorrectApp/>
   </>
  )
}

export default App
