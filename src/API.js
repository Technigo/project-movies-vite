const apiEnv = import.meta.env.VITE_API_KEY;

export const fetchMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiEnv}&language=en-US&page=1`
  );
  if (!response.ok) {
    throw new Error('error');
  }
  return await response.json();
}