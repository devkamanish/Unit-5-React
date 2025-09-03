import { useState } from 'react'

import './App.css'
import TaskList from './TaskList'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <h1>Toolkit Task App</h1>
    <TaskList/>
    
    
   </div>
  )
}

export default App
