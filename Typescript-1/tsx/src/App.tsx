import { useState } from 'react'

import './App.css'
import Greeting from './components/Greeting'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
 <div className='border-5 border-gray-300 min-h-screen p-8'>
  {/* <Greeting name = "Alice" age= {23}/> */}
  <Counter/>
    
 </div>
  )
}

export default App
