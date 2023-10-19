// This component represents the movie details page.
import "./moviedetails.css";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '/src/api';
import { BackButton } from '../components/BackButton';
import { IMAGE_BASE_URL } from '/src/api'; // Import IMAGE_BASE_URL from your API module


export function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieData = await getMovieDetails(id);
        setMovie(movieData);
      } catch (error) {
        console.error('Error fetching movie details: ', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <div>
      {movie ? (
        <article className='movie-details-wrapper'>
          <BackButton />
          <img
            src={`${IMAGE_BASE_URL}/w1280${movie.backdrop_path}`}
            alt={movie.title}
          />
          <img
            src={`${IMAGE_BASE_URL}/w185${movie.poster_path}`}
            alt={movie.title}
          />
          <h1>{movie.title}</h1>
          <p>Rating: {movie.vote_average}</p>
          <p>{movie.overview}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </article>
  );
}


