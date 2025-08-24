import React, { useEffect, useRef, useState } from 'react'

const RenderComponent = () => {
    const [count, setCount] = useState(0)
    const renderCount = useRef(1)

    useEffect(()=>{
        renderCount.current +=1
    })
  return (
    <div>

        <h2>Counter: {count}</h2>
        <button onClick={()=>setCount(prev => prev+1)}>Increase count</button>
        <p>Component Re -rendered: {renderCount.current}</p>
    </div>
  )
}

export default RenderComponent
