import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: 10, width: "200px" }}>
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200x300"}
        alt={movie.Title}
        style={{ width: "100%" }}
      />
      <h4>{movie.Title}</h4>
      <p>{movie.Year}</p>
      <Link to={`/movie/${movie.imdbID}`}>More Details</Link>
    </div>
  );
};

export default MovieCard;
