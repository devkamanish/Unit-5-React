import { useState } from 'react'

import './App.css'
import FormComp from './components/FormComp'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
  <FormComp/>
   </>
  )
}

export default App


