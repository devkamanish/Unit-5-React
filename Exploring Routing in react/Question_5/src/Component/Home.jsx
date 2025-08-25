import React, { useState } from "react";
import MovieCard from "./MovieCard";
const API_KEY = "9b9b876e "; 

const Home = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchMovies = () => {
    setLoading(true);
    setError("");
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === "True") {
          setResults(data.Search);
        } else {
          setError(data.Error || "Something went wrong");
          setResults([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch data");
        setLoading(false);
      });
  };

  return (
    <div style={{ padding: 20 }}>
      <input
        type="text"
        placeholder="Search movie title"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ width: "300px", marginRight: "10px" }}
      />
      <button onClick={searchMovies}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "20px" }}>
        {results.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
