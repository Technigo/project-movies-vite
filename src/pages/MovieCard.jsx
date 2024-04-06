import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./MovieCard.css";

export const MovieCard = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const params = useParams();

  const apiKey = "76898be6bb8657c4eadeb40367146dec";
  const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${apiKey}&language=en-US&page=1`;

  const imageBaseUrl = "http://image.tmdb.org/t/p/";

  const fetchMovieDetails = () => {
    fetch(movieDetailsUrl)
      .then((response) => response.json())
      .then((movieData) => setMovieDetails(movieData))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchMovieDetails();
  }, []);

  return (
    <section
      className="background"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path})`,
      }}>
      <div className="movie-content-box">
        <img src={`${imageBaseUrl}w342${movieDetails.poster_path}`} alt={`a movie poster of ${movieDetails.title}`} />
        <div className="movie-info-box">
          <div>
            <h1>{movieDetails.title}</h1>
            <p>{movieDetails.genres && movieDetails.genres.map((genre) => genre.name).join(", ")}</p>
          </div>
          <div className="star-time-box">
            <p>⭐️ {movieDetails.vote_average}</p>
            <p>{movieDetails.runtime} min</p>
          </div>
          <p>{movieDetails.overview}</p>
          <p>Released {movieDetails.release_date}</p>
        </div>
      </div>
    </section>
  );
};
