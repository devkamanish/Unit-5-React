import React from 'react'
import { useState } from 'react'
import {useNavigate}  from "react-router-dom"
const SearchForm = () => {
    const [city , setCity] = useState("")

    const navigate = useNavigate();

    const handleSubmit = (e)=>{
      e.preventDefault()
      if(city.trim()){
        navigate(`/weather/${city}`)
      }
    }

  return (
    <form onSubmit={handleSubmit} style={{padding:"12px"}}>
        <input type="text" placeholder='Enter city name' value = {city} onChange={(e)=>setCity(e.target.value)}
        style={{padding:"10px",borderRadius :"4px",border:"none"}}
        />
        <button style={{borderRadius : "20px", margin :"10px"} } type='submit'>search</button>
    </form>
  )
}




export default SearchForm