// This component represents the home page with a list of popular movies.
import './home.css';
import { useEffect, useState } from 'react';
import { MovieItem } from '../components/MovieItem';
import { getMovieList } from '/src/api';

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
    <div className="popular-movies-wrapper">
      <h1>Popular Movies</h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}


