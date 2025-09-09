import { useState } from 'react'

import './App.css'
import type { users } from './types/user.types'


function App() {
  const [users , setUsers] = useState<users[]>([])
  const [loading , setLoading] =useState<boolean>(true)

  async function fetchData() {
    let response = await fetch("")

  }
  
  return (
    <div>
      <h1>Hello</h1>

    </div>
  ) 
}

export default App
