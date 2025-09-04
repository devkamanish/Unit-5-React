import React, { useState } from 'react'



const Child= React.memo( ({lable})=> {
    console.log("Child rerender")
    return <p>{lable}</p>
})

const ReactMemo = () => {

    const [count, setCount] = useState(0)

  return (
    <div>
        <h1>Without react.memo</h1>
        <button onClick={()=>setCount(prev=>prev+1)}>Increment</button>
        <p>Count : {count}</p>
        <Child lable = "I rerender every time."/> 
    </div>
)

}

export default ReactMemo


