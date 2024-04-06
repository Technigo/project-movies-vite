/* eslint-disable react-hooks/exhaustive-deps */
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const MovieDetail = () => {
  const movieId = useParams();
  const apiKey = "195790d926bf4d38c02251685a7c5f5e";
  const [movieDetails, setMovieDetails] = useState("");
  const fetchMovieDetails = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId.id}?api_key=${apiKey}&language=en-US`
      );
      if (response.ok) {
        const data = await response.json();
        setMovieDetails(data);
      } else {
        throw new Error("Failed to fetch movie details");
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchMovieDetails();
  }, []);
  console.log(movieId);
  return (
    <section
      className="detail-section"
      style={{
        backgroundImage: `url(http://image.tmdb.org/t/p//w1280${movieDetails.backdrop_path})`,
      }}
    >
      <Link to="/">
        <img src="/arrow.svg" alt="arrow-icon" />
        Movies
      </Link>
      <div className="movie-details">
        <img
          src={`http://image.tmdb.org/t/p//w342${movieDetails.poster_path}`}
          alt=""
        />
        <div className="detail-text">
          <h3>{movieDetails.title}</h3>

          <div className="rating">
            <p className="rating-score">
              <img src="/star.svg" alt="star-icon" />
              {movieDetails && movieDetails.vote_average.toFixed(1)}
            </p>
          </div>

          <p className="movie-overview">{movieDetails.overview}</p>
        </div>
      </div>
    </section>
  );
};
