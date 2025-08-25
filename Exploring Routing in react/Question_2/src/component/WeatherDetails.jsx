import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {useParams} from "react-router-dom"

   const apiKey = `13f5c82470b5757cbdd74c186d74cc21`

const WeatherDetails = () => {

    const {city} = useParams()  
    const [weather , setWeather] = useState(null)
    const [error, setError] = useState("")

    useEffect(()=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then((res)=>{
            if(!res.ok) throw new Error('city not found')
                return res.json()
        
        }).then((data)=>{
            setWeather(data)
            setError('')
        })
        
        .catch((err)=>setError(err.message))
            
     
    },[city]);

    if(error) return <p style={{color : "red"}}>{error}</p>
    if(!weather) return <p>Loading...</p>


  return (

    <div style={{padding :"20px",width : "100"}}>
        <h3>Weathre in {weather.name}</h3>
          <p><strong>Temperature:</strong> {weather.main.temp}°C</p>
      <p><strong>Humidity:</strong> {weather.main.humidity}%</p>
      <p><strong>Condition:</strong> {weather.weather[0].description}</p>
      
      <iframe
        title="map"
        width="100%"
        height="300"
        frameBorder="0"
        src={`https://www.google.com/maps?q=${weather.coord.lat},${weather.coord.lon}&z=11&output=embed`}
        allowFullScreen
      ></iframe>
    </div>

    
  )
}

export default WeatherDetails 










