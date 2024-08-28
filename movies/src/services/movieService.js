import movieData from '../data/data';
import axios from 'axios';

const getAllMovies = async () => {
  const my_movies = await axios.get('/movies-coming');
  return my_movies;
};

const getMovieById = async (id) => {
  const my_movie_by_id = movieData['movies-coming'][id];
  return my_movie_by_id;
};

const searchMovies = async (searchTerm) => {
  // const response = await axios.get(`${API_URL}/movies/search?q=${searchTerm}`);
  // return response.data;
};

const getFavorites = async () => {
  // Implement logic to fetch favorites from local storage or database
  // return [];
};

// Export the functions directly for easier use
export { getAllMovies, getMovieById, searchMovies, getFavorites };
