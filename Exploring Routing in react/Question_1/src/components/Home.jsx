import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
const [data, setData] = useState([])
const [query , setQuery] = useState("")

useEffect(()=>{
    fetch("https://dummyjson.com/posts")
    .then((res)=>res.json())
    .then((data)=> setData(data.posts))
},[])
 
const filteredPost = data.filter((post)=>{
    return post.title.toLowerCase().includes(query.toLowerCase())
})

    
  return (
    
    <div style={{padding:"25px"}}>
        <h2>Blog Posts</h2>
        <input type="text" placeholder='search by title..' value={query} onChange={(e)=>setQuery(e.target.value)} />
        <ol>
            {
                filteredPost.map((post)=>(
                    <li key = {post.id}>
                    <Link to={`post/${post.id}`}>{post.title}</Link>
                    </li>
                    
                ))
            }
        </ol>
     
    </div>
  )
}


export default Home

