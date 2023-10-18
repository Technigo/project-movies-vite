// This component represents the home page with a list of popular movies.
import { useEffect, useState } from 'react'
import { MovieItem } from '../components/MovieItem';
import { getMovieList } from '../Api';

export function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movieList = await getMovieList();
        setMovies(movieList);
      } catch (error) {
        console.error('Error fetching movies: ', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Popular Movies</h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};


