import { useEffect, useState } from 'react'

import './App.css'
import type { Users } from './types/users.types';
import Card from './components/Card';

function App() {
  const [data, setData] = useState<Users[]>([]);
  const [loading , setLoading] = useState<boolean>(true)
  const [error, setError] = useState<unknown>(null)


  async function fetchData() {
   try {
     const response = await fetch("https://jsonplaceholder.typicode.com/users")
     const res = await response.json()
     setData(res)
     
   } catch (e) {
    setError(e)

   }finally{
    setLoading(false)
   }
  }
  

  useEffect(()=>{
    fetchData()
  },[])

  if(loading) return <p>Loading...</p>

  return (
   
    <div className='border-gray-400 border-4 p-2 '>
      {data.map((ele)=>(
          <Card key={ele.id} user={ele}/>
      ))}
    </div>
  )
}

export default App
