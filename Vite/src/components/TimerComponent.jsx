import React from 'react'
import { useState,useEffect } from 'react'

const TimerComponent = () => {

    const [seconds, setseconds] = useState(0)

  useEffect(()=>{
    console.log("timmer")

   const timer =  setInterval(() => {
        setseconds(prev=>prev+1)
        console.log(`seconds ${seconds}`)
    }, 1000);

    return()=>{
        clearInterval(timer)
        console.log("Component unmounted")
    }
  },[])
   

  return (
    <>
     <h1>Time: {seconds}s</h1>
    </>
  )
}

export default TimerComponent