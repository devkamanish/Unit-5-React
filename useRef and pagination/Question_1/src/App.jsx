import React, { useEffect, useState, useRef } from "react";
import "./App.css";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [apiPageCount, setApiPageCount] = useState(0);
  const [slicedCharacters, setSlicedCharacters] = useState([]);

  const apiPageRef = useRef(1); // Tracks which API page we're on
  const visiblePageRef = useRef(1); // Tracks sub-page (1 or 2) within 20 characters

  const ITEMS_PER_PAGE = 10;

  const fetchCharacters = async (apiPage = 1) => {
    try {
      const res = await fetch(`https://rickandmortyapi.com/api/character?page=${apiPage}`);
      const data = await res.json();
      setCharacters(data.results); // 20 characters
      setApiPageCount(data.info.pages);
      visiblePageRef.current = 1; // Reset to sub-page 1
      updateSlicedCharacters(data.results, 1);
    } catch (err) {
      console.error("Error fetching characters:", err);
    }
  };

  const updateSlicedCharacters = (fullList, visiblePage) => {
    const startIndex = (visiblePage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    setSlicedCharacters(fullList.slice(startIndex, endIndex));
  };

  useEffect(() => {
    fetchCharacters(apiPageRef.current);
  }, []);

  const handleNext = () => {
    if (visiblePageRef.current === 1) {
      // Go to sub-page 2
      visiblePageRef.current = 2;
      updateSlicedCharacters(characters, 2);
    } else {
      // Go to next API page
      if (apiPageRef.current < apiPageCount) {
        apiPageRef.current++;
        fetchCharacters(apiPageRef.current);
      }
    }
  };

  const handlePrevious = () => {
    if (visiblePageRef.current === 2) {
      // Go to sub-page 1
      visiblePageRef.current = 1;
      updateSlicedCharacters(characters, 1);
    } else {
      // Go to previous API page
      if (apiPageRef.current > 1) {
        apiPageRef.current--;
        fetchCharacters(apiPageRef.current);
      }
    }
  };

  return (
    <div className="app-container">
      <h1>Rick and Morty Characters</h1>
      <div className="grid">
        {slicedCharacters.map((char) => (
          <div key={char.id} className="card">
            <img src={char.image} alt={char.name} />
            <h3>{char.name}</h3>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button onClick={handlePrevious} disabled={apiPageRef.current === 1 && visiblePageRef.current === 1} style={{color:"black"}}>
          Previous
        </button>

        <button className={visiblePageRef.current === 1 ? "active" : ""} onClick={() => {
          visiblePageRef.current = 1;
          updateSlicedCharacters(characters, 1);
        }}>
          Page {(apiPageRef.current - 1) * 2 + 1}
        </button>

        <button className={visiblePageRef.current === 2 ? "active" : ""} onClick={() => {
          visiblePageRef.current = 2;
          updateSlicedCharacters(characters, 2);
        }}>
          Page {(apiPageRef.current - 1) * 2 + 2}
        </button>

        <button
          onClick={handleNext}
          disabled={
            apiPageRef.current === apiPageCount &&
            visiblePageRef.current === 2
          }
          style={{color:"black"}}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
