

// Paste this file in App.js file in your react app.

import { useState } from "react";

function App() {
  const [title, setTitle] = useState("React Title");
  const [count, setCount] = useState(0);

  const changeTitle = () => {
    setCount(prev => prev + 1);
    setTitle(`Title Changed with React ${count + 1}`);
  };

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={changeTitle}>Change Title (React)</button>
      <p>DOM Updates (React): {count}</p>
    </div>
  );
}

export default App;
