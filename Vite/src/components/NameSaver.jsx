import React from 'react'
import useLocalStorage from '../hooks/localStorage'

const NameSaver = () => {
    const [name , setName] = useLocalStorage("name" , "Guest")
  return (
    <div>
        <h1>Name saver</h1>
        <input value={name} placeholder='Enter your name' onChange={(e)=>setName(e.target.value)} />
        <p>Hello, {name}</p>
    </div>
  )
}

export default NameSaver