import { useState } from 'react'

import './App.css'
import Home from './components/Home'
import {Routes,Route} from "react-router-dom"
import ProductDetail from './components/ProductDetail'
function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Routes>
    <Route path='/' element= {<Home/>}/>
    <Route  path = "/product/:id" element = {<ProductDetail/>}/>
   </Routes>
   </>
  )
}

export default App
