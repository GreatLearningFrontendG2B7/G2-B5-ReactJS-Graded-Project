import React from 'react';
import { FaHeart } from 'react-icons/fa6';
import '../styles/MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <div className="movieCard">
      <h4>{movie.title}</h4>
      <div className="fav">
        <p>Add to Favorites </p>
        <FaHeart />
      </div>
    </div>
  );
};

export default MovieCard;
