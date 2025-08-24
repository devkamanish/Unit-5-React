import React, { useContext, useState } from 'react'

import './App.css'
import { ThemeContext } from './context/ThemContext'

function App() {
  const {theme, toggleTheme} = useContext(ThemeContext)
  
  const appStyles = {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme === "light" ? "#ffffff" : "#222222",
    color: theme === "light" ? "#000000" : "#ffffff",
    transition: "all 0.3s ease"
  };
  return (
  <>
  <div style={appStyles}>

    <h1>React context API-Theme Toggle</h1>
    <button onClick={toggleTheme}
    style={{padding: "10px 20px",cursor :"pointer",margin:"10px", borderRadius : "5px"}}

    >Toggle to {theme === "light" ?"Dark":"Light  "}</button>
  </div>
  </>
  )
}




export default App
