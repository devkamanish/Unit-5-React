
import { useState ,useMemo, useContext, createContext} from 'react'
import './App.css'

function SlowDouble({number}){
  const slowFunction = (num)=>{
    console.log("calculating...")
    for(let i=0;i<1e9;i++){}
    console.log("completed")
    return num *2;
  }

  const result = useMemo(()=>slowFunction(number), [number])


  return (
    <p>Result {result}</p>
  )
}


function App() {
  const  [number , setNumber] = useState(1)
  const [color , setColor] = useState(false)

    const  toggleColor =()=>{
      setColor(prev=>!prev)
    }
  return (
    <>
    <div style={{backgroundColor: color?"lightblue" : "lightcoral", padding:"20px"}}>
      <h2>Slow calculation without using useMemo</h2>
      <input type="text" value={number} onChange={(e)=>setNumber(Number(e.target.value))} />
      <button onClick={toggleColor}>Toggle Color</button>
      <SlowDouble number={number} />
    </div>
    
    </>
    
  )
}



export default App
