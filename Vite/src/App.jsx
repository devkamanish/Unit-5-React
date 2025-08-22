<<<<<<< HEAD
import { useState , useContext, createContext} from 'react'
import './App.css'
import DataComponent from './component/DataComponent';

function App() {
  return (
    <>
    <DataComponent/>
    </>
    
  )
}

export default App;
=======
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
>>>>>>> bce3b0cf01e8689d9a9f415ba855ebbd4ad40919
