import React, { useEffect, useState } from "react";
import { getMoviesComing } from "../services/movieService";
import MovieCard from "../components/MovieCard";
import "../styles/HomePage.css";
import { NavLink } from "react-router-dom";

const ComingSoon = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getMoviesComing();
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

export default ComingSoon;
