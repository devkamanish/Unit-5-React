import { useState } from 'react'

import TimerComponent from './components/TimerComponent'

function App() {
const [show, setshow] = useState(false)
  return (
   <>
  {show && <TimerComponent/>}
  <button onClick={()=>setshow(!show)}>Show timer </button>
  
   </>
  )
}


export default App
