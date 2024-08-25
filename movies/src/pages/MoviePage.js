import React, { useState, useEffect } from 'react';
import MovieDetails from '../components/MovieDetails.js';
//import movieService from '../services/movieService';
import {getMovieById} from '../services/movieService.js';

const MoviePage = ({ match }) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await getMovieById(match.params.id);
      setMovie(data);
    };
    fetchMovie();
  }, [match.params.id]);

  return (
    <div className="movie-page">
      {movie && <MovieDetails movie={movie} />}
    </div>
  );
};

export default MoviePage;
