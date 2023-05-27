import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Movie from "./Movie";

import "../styles/Catalog.css";

const Catalog = () => {
  const [movies, setMovies] = useState([]);
  const { sort } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://api.andrespecht.dev/movies", {
        method: "GET",
        mode: "cors",
      })
      .then((response) => {
        const tempMovies = response.data.response;
        if (sort === "title") {
          tempMovies.sort((a, b) => (a.title > b.title ? 1 : -1));
        } else if (sort === "year") {
          tempMovies.sort((a, b) => (a.year > b.year ? 1 : -1));
        }
        setMovies(tempMovies);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="catalog">
      <div className="top">
        <select
          required
          onChange={(e) => {
            navigate(`/${e.target.value}`);
            window.location.reload();
          }}
        >
          <option selected disabled>
            Sort movies
          </option>
          <option value="title">Title</option>
          <option value="year">Date</option>
        </select>
        <button>
          <Link to={"/movies/new"}>Add movie</Link>
        </button>
      </div>
      <div className="movies">
        {movies.map((movie) => (
          <Movie key={movie._id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
