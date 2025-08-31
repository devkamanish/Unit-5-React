import React, { useEffect, useState } from 'react'

const QueryBasedPagination = () => {
    const [page, setPage] = useState(1)
    const [posts, setPosts] = useState([])
    
    async function fetchPosts() {
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}`)
        let result = await response.json()
        setPosts(result)
      
        
    } 

    useEffect(()=>{
        fetchPosts()
    },[page])
  return (
    <div>
        <h2>Posts (Page {page})</h2>
        <ul>
       {posts.map(post=>(
        <p key={post.id}>Id: {post.id} <span>Title: {post.title}</span></p>

       ))}
       <button onClick={()=>setPage(prev =>prev-1)} disabled = {page===1}>Prev</button>
       <button onClick={()=>setPage(prev=>prev+1)}>Next</button>
        </ul>
    </div>
  )
}


export default QueryBasedPagination