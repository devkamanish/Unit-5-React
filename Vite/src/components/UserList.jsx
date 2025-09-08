import React from 'react'
import useFetch from '../hooks/useFetch'

const UserList = () => {

    const {data, loading, error} = useFetch("https://jsonplaceholder.typicode.com/users")
  if(loading) return <p>Loading...</p>
  if(error) return <p>{error}</p>
  return (
   <div>
    <h1>User list</h1>

    {data.map((ele)=>(
         <h3 key={ele.id}>{ele.name}</h3>
    ))}
   </div>
  )
}

export default UserList