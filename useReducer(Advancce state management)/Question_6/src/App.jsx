import { useState } from 'react'

import './App.css'
import { useReducer } from 'react'


const initialState = { theme: "light" };

function reducer(state, action) {
  switch (action.type) {
    case "toggle_theme":
      return { theme: state.theme === "light" ? "dark" : "light" };
    default:
      return state;
  }
}


function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const toggleTheme = ()=>{
    dispatch({type:"toggle_theme", payload: !state.theme})

  }

  const appStyles = {
    backgroundColor: state.theme === "light"? "white": "black",
    color : state.theme === "light"? "black": "white",
    height : "100vh", 
    width : "100vh"

  }

  return (
  
   <>

  <div style={appStyles} className="App"> 
    <h1>{state.theme.toUpperCase()} MODE </h1>
    <button onClick={toggleTheme}>Toggle Theme</button>
  </div>
   

   </>
  )
}

export default App
