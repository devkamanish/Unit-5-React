import { useState } from 'react'

import './App.css'
import Timercomponent from './components/Timercomponent'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <Timercomponent/>
  </>
  )
}

export default App
