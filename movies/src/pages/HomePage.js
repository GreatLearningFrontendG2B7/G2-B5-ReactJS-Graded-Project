import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard.js';
import { getAllMovies, searchMovies } from '../services/movieService.js';
import '../styles/HomePage.css';
function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getAllMovies();
      setMovies(data);
    };
    fetchMovies();
  }, []);

  return (
    <section className="homePage">
      <h3>Movies</h3>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <img src={`img/${movie.poster}`} alt={`${movie.poster}`} />
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default HomePage;
