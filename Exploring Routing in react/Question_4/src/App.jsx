import { useState } from 'react'
import {BrowserRouter as Router , Routes, Route, Link} from 'react-router-dom'
import { UserProvider } from './context/UserContext'
import './App.css'
import Profile from './components/Profile'
import Setting from './components/Setting'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <UserProvider>
    <Router>
      <nav>
        <Link to = '/'>Home</Link> 
        <Link to ='/profile'>Profile</Link>
        <Link to = '/settings'>Setting</Link>
      </nav>
      <Routes>
  <Route  path='/' element = {<Home/>}/>
      <Route path='/profile' element = {<Profile/>} />
      <Route path='/settings' element = {<Setting/>}/>
      </Routes>
    
    </Router>
   </UserProvider>
   </>
  )
}

export default App

