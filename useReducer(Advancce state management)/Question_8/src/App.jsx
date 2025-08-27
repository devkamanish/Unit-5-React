import { useReducer, useState } from 'react'


import './App.css'

const initialState = {isVisible :false}

function visibilityReducer(state, action){
  switch(action.type){
    case "TOGGLE_VISIBILITY" :
      return {isVisible : !state.isVisible}

    default:
      return state  
  }
}


function App() {
  const [state , dispatch] = useReducer(visibilityReducer, initialState)
  return (
    <div>
    <button onClick={()=>dispatch({type :"TOGGLE_VISIBILITY"})}>Toggle Message</button>
    {state.isVisible && <h2>Hello, World!</h2>}
    </div>
  )
}


export default App



