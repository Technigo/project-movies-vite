/* eslint-disable no-undef */
/* eslint-disable no-useless-catch */

const API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3';

// Function to make a GET request to the API

export const fetchMovies = async () => {
    try {
      const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
      if (response.ok) {
        const data = await response.json();
        return data.results;
      } else {
        throw new Error('Failed to fetch movies');
      }
    } catch (error) {
      throw error;
    }
  };
  
  // Function to fetch movie details by ID
  export const fetchMovieDetails = async (movieId) => {
    try {
      const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error('Failed to fetch movie details');
      }
    } catch (error) {
      throw error;
    }
  };
