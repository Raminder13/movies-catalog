import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

import "../styles/Detail.css";

const Detail = () => {
  const [movie, setMovie] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://api.andrespecht.dev/movies", {
        method: "GET",
        mode: "cors",
      })
      .then((response) => {
        const details = response.data.response.filter(
          (movie) => movie._id === id
        );
        if (details.length === 0) {
          navigate("/not-found");
        } else {
          setMovie(...details);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="detail">
      <Helmet>
        <title>{movie.title}</title>
      </Helmet>
      <div className="image">
        <img src={movie.poster} alt={movie.title} />
      </div>
      <div className="right">
        <div className="movie-info">
          <div>{movie.title}</div>
          <div>
            {movie.year}
            <span>.</span>
            {movie.runningTime}
          </div>
        </div>
        <p className="movie-description">{movie.description}</p>
        <div className="movie-genre">
          {movie?.genre?.map((g) => (
            <span>{g}</span>
          ))}
        </div>
        <button>Watch now</button>
      </div>
    </div>
  );
};

export default Detail;
