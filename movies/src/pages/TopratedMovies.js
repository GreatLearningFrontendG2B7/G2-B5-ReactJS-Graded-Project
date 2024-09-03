import React, { useEffect, useState } from "react";
import "../styles/HomePage.css";
import MovieCard from "../components/MovieCard";
import { getTopratedMovies } from "../services/movieService";
import { NavLink } from "react-router-dom";

const TopratedMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getTopratedMovies();
      setMovies(data.data);
    };
    fetchMovies();
  }, []);

  return (
    <section className="homePage">
      <h3>Movies</h3>
      <ul>
        {movies && movies.length > 0 ? (
          movies.map((movie) => (
            <li key={movie.id}>
              <NavLink to={`/movies/${movie.id}`} state={{ movie }}>
                <img src={`img/${movie.poster}`} alt={`${movie.poster}`} />
              </NavLink>
              <MovieCard movie={movie} />
            </li>
          ))
        ) : (
          <h4 className="notFound">No movies found</h4>
        )}
      </ul>
    </section>
  );
};

export default TopratedMovies;
