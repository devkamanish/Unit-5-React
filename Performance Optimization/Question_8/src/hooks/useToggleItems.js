import { useState } from 'react';

function useToggleItems(items = [], initialPosition = 0) {
  const [position, setPosition] = useState(initialPosition);

  const toggleState = () => {
    setPosition((prev) => (prev + 1) % items.length);
  };

  return [items[position], toggleState];
}

export default useToggleItems;


