import { useState } from 'react'

import './App.css'
import UseMemo from './components/UseMemo'
import ReactMemo from './components/ReactMemo'
import Usecallback from './components/Usecallback'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    {/* <UseMemo/> */}
    {/* <ReactMemo/> */}
    <Usecallback/>
   </>
  )
}

export default App
