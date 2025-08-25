import { useState } from 'react'
import {Routes,Route} from "react-router-dom"

import './App.css'
import Home from './component/Home'
import WeatherDetails from './component/WeatherDetails'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element  = {<Home/>}/>
      <Route path = "/weather/:city" element = {<WeatherDetails/>} />
    </Routes>
    </>
  )
}


export default App

