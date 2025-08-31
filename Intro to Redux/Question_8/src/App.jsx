import { useState } from 'react'

import './App.css'
import Counter from './component/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Counter/>
    </div>
  )
}

export default App
