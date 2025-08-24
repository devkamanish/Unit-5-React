
import { useState , useContext, createContext} from 'react'
import './App.css'
import FocusInput from './components/FocusInput'
import RenderComponent from './components/RenderComponent'
import QueryBasedPagination from './components/QueryBasedPagination'


function App() {
  return (
    <>
    {/* <FocusInput/>

    <RenderComponent/> */}
    <QueryBasedPagination/>
    </>
    
  )
}



export default App
