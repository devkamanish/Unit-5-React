import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PostsDetails = () => {

    const {id}  = useParams()
    const [post, setPost] = useState(null)

    useEffect(()=>{
        fetch(`https://dummyjson.com/posts/${id}`)
        .then((res)=>res.json())
        .then((data)=>setPost(data))
        
    },[id])
    
    if(!post) return <div>Loading...</div>
  return (
    <div style={{padding:"20px"}}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <p><strong>Tags: </strong>{post.tags.join(', ')}</p>
    </div>

  )
  
}

export default PostsDetails



