import React, { useCallback, useState } from 'react'

const Button = React.memo(({onClick,label})=>{
    console.log("button rendered")
    return <button onClick={onClick}>{label}</button>

})



const Usecallback = () => {
    const [count , setCount] = useState(0)

    const handleClick = useCallback(()=>{   // if we dont use useCallback here then this function is re created again when the state changes.

        // here use useCallback  memoizes the funciton reference to prevent unneccessary.....
        console.log("Button Clicked")
    
    },[])
  return (

    <div>
        <h2>Without useCallback</h2>
        <p>Count {count}</p>
        <button onClick={()=>setCount(prev=>prev+1)}>Increment</button>
        <Button onClick= {handleClick} label = "Non memoized function"/>
    </div>
  )
}

export default Usecallback