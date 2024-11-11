import axios from "axios";

const accessToken = import.meta.env.VITE_TMDB_API_READ_ACCESS_TOKEN;
const baseUrl = "https://api.themoviedb.org/3";

export const fetchMovies = async (category) => {
  try {
    const response = await axios.get(`${baseUrl}/movie/${category}`, {
      params: {
        language: "en-US",
        page: 1,
      },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return { results: [] };
  }
};

export const fetchMovieDetails = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/movie/${id}`, {
      params: {
        language: "en-US",
      },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await axios.get(`${baseUrl}/search/movie`, {
      params: {
        language: "en-US",
        query,
        page: 1,
        include_adult: false,
      },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error searching movies:", error);
    return { results: [] };
  }
};
