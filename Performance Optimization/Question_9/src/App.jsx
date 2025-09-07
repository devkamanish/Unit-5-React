import React, { useState, useEffect, useCallback } from "react";
import Post from "./components/Post";
import "./style.css";

let postId = 1;

function App() {
  const [timer, setTimer] = useState(0);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleAddPost = () => {
    if (!title.trim() || !body.trim()) return;

    const newPost = {
      id: postId++,
      title,
      body,
      verifyPost: false
    };
    setPosts(prev => [...prev, newPost]);
    setTitle("");
    setBody("");
  };

  const handleToggleVerify = useCallback((id) => {
    setPosts(prev =>
      prev.map(post =>
        post.id === id ? { ...post, verifyPost: !post.verifyPost } : post
      )
    );
  }, []);
 
  return (
    <div className="App">
      <h2>Timer: {timer}</h2>
      <input
        type="text"
        placeholder="Enter post title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Enter post body"
        value={body}
        onChange={e => setBody(e.target.value)}
      />
      <br />
      <button onClick={handleAddPost}>Add Post</button>

      <h2>Posts</h2>
      {posts.map(post => (
        <Post key={post.id} post={post} onToggleVerify={handleToggleVerify} />
      ))}
    </div>
  );
}

export default App;
