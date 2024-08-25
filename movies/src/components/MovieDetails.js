import React from 'react';

const MovieDetails = ({ movie }) => {
  return (
    <div className="movie-details">
      <h1>{movie.title}</h1>
      <img src={`img/{movie.poster}`} alt={movie.title} />
      <p>{movie.plot}</p>
    </div>
  );
};

export default MovieDetails;
