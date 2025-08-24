import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AuthProvider } from './AuthContext'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
   
   <AuthProvider>
    <div>
    <Navbar/>
    <Main/>
    <Footer/>
    </div>
   </AuthProvider>
   
  )
}

export default App
