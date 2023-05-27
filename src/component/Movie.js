import React from "react";
import { Link } from "react-router-dom";

import "../styles/Movie.css";

const Movie = ({ movie }) => {
  return (
    <div className="movie">
      <Link to={`/movies/${movie._id}`}>
        <img src={movie.poster} alt={movie.title} />
      </Link>
      <div>
        <span>{movie.title}</span>
        <span>{movie.year}</span>
      </div>
    </div>
  );
};

export default Movie;
