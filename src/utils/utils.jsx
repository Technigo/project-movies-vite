export const API_KEY = `${process.env.REACT_API_KEY}`;
export const BASE_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_API_KEY}&language=en-US&page=1`;
export const SINGLE_MOVIE = `https://api.themoviedb.org/3/movie/{movie_id}?api_key=${process.env.REACT_API_KEY}&language=en-US`;
