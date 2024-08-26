import React, { useState, useEffect } from 'react';
import Favorites from '../components/Favorites.js';
//import movieService from '../services/movieService.js';
import { getFavorites } from '../services/movieService.js';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const data = await getFavorites();
      setFavorites(data);
    };
    fetchFavorites();
  }, []);

  return (
    <section className="favorites-page">
      <Favorites favorites={favorites} />
    </section>
  );
};

export default FavoritesPage;
