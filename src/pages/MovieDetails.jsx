// This component represents the movie details page.
import "./moviedetails.css";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from "/src/apiFetch.jsx";
import { BackButton } from '../components/BackButton';
import { IMAGE_BASE_URL } from "/src/apiFetch.jsx"; // Import IMAGE_BASE_URL from your API module


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

  const roundedVoteAverage = movie ? Math.round(movie.vote_average) : null;


  return (
    <article className="details-page">
      {movie ? (
        <div>
          <BackButton />
          <div className="background" style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url('${IMAGE_BASE_URL}/w1280${movie.backdrop_path}')`
          }}>
            <div className="summary">
              <img
                src={`${IMAGE_BASE_URL}/w342${movie.poster_path}`}
                alt={movie.title}
              />
              <div className="details">
                <h1>
                  <span className="title">{movie.title}</span>
                  <span className="rating">{roundedVoteAverage}</span>
                </h1>
                <p>{movie.overview}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </article>
  );
}


