import React, { useState } from 'react';
import './App.css';

function App() {

  const [activePage, setActivePage] = useState()

 
  const renderContent =()=>{

    switch(activePage){
      case "home" : 
      return <h2>Welcome to home</h2>

      case "about":
        return <h2>Welcome to about</h2>

        case "contact":
        return <h2>Contact us</h2>
       default : 
       return <h2>Welcome</h2>
    }
  }
  
 
  return (
    <div className="App">
      <nav className="navbar">
        <button onClick={()=>setActivePage("home")}>Home</button>
        <button onClick={()=>setActivePage("about")}>About</button>
        <button onClick={()=>setActivePage("contact")}>Contact</button>
      </nav>

      <div className="content">
        {renderContent()}
      </div>
    </div>


  )


  
}

export default App;

