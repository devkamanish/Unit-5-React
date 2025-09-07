import { useState } from 'react'

import './App.css'
import Useform from './components/Useform'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Useform/>
    </>
  )
}

export default App
