import React from 'react';
import useToggleItems from './hooks/useToggleItems';

function App() {
  const items = ['A', 'B', 'C'];
  const [currentItem, toggleItem] = useToggleItems(items, 1); 

  return (
    <div>
      <h2>Current Item: {currentItem}</h2>
      <button onClick={toggleItem}>Toggle</button>
    </div>
  );
}

export default App;



