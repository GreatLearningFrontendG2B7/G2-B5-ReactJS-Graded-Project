// import movieData from "../data/data";
import axios from "axios";

const getAllMovies = async () => {
  const my_movies = await axios.get("/movies-coming");
  return my_movies;
};

// const getMovieById = async (id) => {
//   const my_movie_1 = await movieData["movies-coming"][id];
//   const my_movie_2 = await movieData["top-rated-india"][id];
//   const my_movie_3 = await movieData["top-rated-movies"][id];
//   const my_movie_4 = await movieData["movies-in-theaters"][id];
//   const finalData =
//     my_movie_1 || my_movie_2 || my_movie_3 || my_movie_4 || null;
//   return finalData;
// };

const searchMovies = async (searchTerm) => {
  // const response = await axios.get(`${API_URL}/movies/search?q=${searchTerm}`);
  // return response.data;
};

const getFavorites = async () => {
  const my_movies = await localStorage.getItem("favorites");
  return my_movies ? JSON.parse(my_movies) : [];
};

const getMoviesComing = async () => {
  const my_movies = await axios.get("/movies-coming");
  return my_movies;
};

const getTopratedIndian = async () => {
  const my_movies = await axios.get("/top-rated-india");
  return my_movies;
};

const getTopratedMovies = async () => {
  const my_movies = await axios.get("/top-rated-movies");
  return my_movies;
};

// Export the functions directly for easier use
export {
  getAllMovies,
  searchMovies,
  getFavorites,
  getTopratedIndian,
  getTopratedMovies,
  getMoviesComing,
};
