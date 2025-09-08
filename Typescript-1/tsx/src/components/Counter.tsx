import { useState } from "react"

const Counter = () => {
    
    const [count, setCount] = useState<number>(0)

  return (
    <div>
        <h1>Counter : {count}</h1>
        <button className="border-2 p-2 rounded-2xl"  onClick={()=>setCount(prev=>prev+1)}>Increment</button>
    </div>
  )
}

export default Counter