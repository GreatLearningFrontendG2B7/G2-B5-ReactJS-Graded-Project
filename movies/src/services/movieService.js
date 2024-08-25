import axios from 'axios';
import data from '../data/data.js';

// Replace with your actual API URL
// const API_URL = 'https://api.example.com';

// Alternatively, use a local JSON file for development
//const API_URL = '../data/data.json';
const API_URL = "http://localhost:3002/";

const getAllMovies = async () => {
  const my_movies = `${API_URL}movies-coming`;
  //const response = await axios.get(`${API_URL}/movies`);
  const response = await axios.get(my_movies);
  return response.data;
};

const getMovieById = async (id) => {
  const my_movie_by_id = `${API_URL}movies-coming${[id]}`;
  const response = await axios.get(my_movie_by_id);
  return response.data;
};

const searchMovies = async (searchTerm) => {
  const response = await axios.get(`${API_URL}/movies/search?q=${searchTerm}`);
  return response.data;
};

const getFavorites = async () => {
  // Implement logic to fetch favorites from local storage or database
  return [];
};

// Export the functions directly for easier use
export { getAllMovies, getMovieById, searchMovies, getFavorites };
