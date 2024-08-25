import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard.js';
import SearchBar from '../components/SearchBar.js';
//import movieService from '../services/movieService.js';
import {getAllMovies, searchMovies} from '../services/movieService.js';

function HomePage()
{
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getAllMovies();
      setMovies(data);
    };
    fetchMovies();
  }, []);

  const handleSearch = async (searchTerm) => {
    const data = await searchMovies(searchTerm);
    setMovies(data);
  };

  return (
    <div className="home-page">
      <SearchBar onSearch={handleSearch} />
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <MovieCard movie={movie} />
            <img src={`img/${movie.poster}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
