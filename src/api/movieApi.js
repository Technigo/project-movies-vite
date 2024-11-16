const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_KEY;

/**
 * Fetch popular movies.
 * @param {number} page - The page number to fetch (default is 1).
 * @returns {Promise<Array>} - An array of popular movie results.
 */
export const fetchPopularMovies = async (page = 1) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch popular movies");
    }

    const data = await response.json();
    return data.results; // Return the movie results
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    throw error; // Re-throw error for handling in the component
  }
};

/**
 * Fetch details of a specific movie by its ID.
 * @param {string} id - The movie ID.
 * @returns {Promise<Object>} - The movie details.
 */
export const fetchMovieDetails = async (id) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch movie details");
    }

    const data = await response.json();
    return data; // Return the movie details
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};
