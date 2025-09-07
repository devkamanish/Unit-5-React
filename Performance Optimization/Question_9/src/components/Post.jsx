import React, { useMemo } from "react";

const Post = React.memo(({ post, onToggleVerify }) => {
  const { id, title, body, verifyPost } = post;

  const backgroundColor = useMemo(() => {
    const color = `hsl(${Math.floor(Math.random() * 360)}, 70%, 80%)`;
    return color;
  }, [id]);
   
  return (
    <div className="post" style={{ backgroundColor }}>
      <h3>Title: {title}</h3>
      <p>{body}</p>
      <p>Status: {verifyPost ? "Verified" : "Not Verified"}</p>
      <button onClick={() => onToggleVerify(id)}>
        {verifyPost ? "Unverify" : "Verify"}
      </button>
    </div>
  );
});


export default Post;
