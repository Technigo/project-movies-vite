const API_KEY = '06865a41347d5e83bed0257e5d40c860';
const BASE_URL = 'https://api.themoviedb.org/3';
export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

export async function getMovieList() {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch movie list');
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    throw error;
  }
}

export async function getMovieDetails(movieId) {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch movie details');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}