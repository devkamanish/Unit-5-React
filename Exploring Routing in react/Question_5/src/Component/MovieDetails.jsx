import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_KEY = "9b9b876e "; // 🔑 Replace with your OMDb API key


const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === "True") {
          setMovie(data);
        } else {
          setError(data.Error);
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch movie details");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p style={{ padding: 20 }}>Loading...</p>;
  if (error) return <p style={{ color: "red", padding: 20 }}>{error}</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>{movie.Title}</h2>
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x400"}
        alt={movie.Title}
        width="200"
      />
      <p><strong>Year:</strong> {movie.Year}</p>
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Plot:</strong> {movie.Plot}</p>
      <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
    </div>
  );
};

export default MovieDetails;
