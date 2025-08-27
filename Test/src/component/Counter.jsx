import React from 'react'
import { useReducer } from 'react'


function reducer(state, action){
    switch(action.type){
        case "increment":
            return {count : state.count+1}
        case "decrement":
            return { count : state.count-1} 
        case "reset":
            return {count :0}  
        default : 
        return state
    }
}
const Counter = () => {
     const [state, dispatch] = useReducer(reducer , {count:0})

  return (
    <div>
        <h1>Counter using useReducer</h1>
        <p>Count: {state.count}</p>
        <button onClick={()=>dispatch({type :"increment"})}>Increment</button>
        <button onClick={()=>dispatch({type : "decrement"})}>Decrement</button>
        <button onClick={()=>dispatch({type: "reset" })}>Rest </button>
    </div>
  )
}

export default Counter