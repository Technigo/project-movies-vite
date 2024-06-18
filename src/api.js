const API_BASE_URL = "https://api.themoviedb.org/3/movie";
const API_KEY = import.meta.env.VITE_APP_API_KEY;

export const fetchPopularMovies = async () => {
  const response = await fetch(
    `${API_BASE_URL}/popular?api_key=${API_KEY}&language=en-US&page=1`
  );
  if (!response.ok) {
    throw new Error("Failed to load popular movies");
  }
  return await response.json();
};

export const fetchMovieDetails = async (movieId) => {
  const response = await fetch(
    `${API_BASE_URL}/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  if (!response.ok) {
    throw new Error("Failed to load movie details");
  }
  return await response.json();
};
