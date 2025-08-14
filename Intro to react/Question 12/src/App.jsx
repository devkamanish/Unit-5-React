import React from 'react';

function App() {
  const techStack = ["React", "JavaScript", "CSS"];

  return (
    <div>
      <h1>My Tech Stack</h1>
      <ul>
        {techStack.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
