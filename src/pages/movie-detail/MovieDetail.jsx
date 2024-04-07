/* eslint-disable react-hooks/exhaustive-deps */
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { MovieDetailSection } from "../../components/movie-detail-section/MovieDetailSection";
import { TopMenu } from "../../components/top-menu/TopMenu";
import "./MovieDetail.css";

export const MovieDetail = () => {
  const movieId = useParams();
  const apiKey = "195790d926bf4d38c02251685a7c5f5e";
  const [movieDetails, setMovieDetails] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

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
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
  }, []);

  console.log(movieId.id);

  return (
    <section
      className="detail-section"
      style={{
        backgroundImage: `url(http://image.tmdb.org/t/p//w1280${movieDetails.backdrop_path})`,
      }}
    >
      <TopMenu />
      {isLoading ? (
        <p className="loading-text">Loading...</p>
      ) : error ? (
        <p className="detail-error-message">Oops, the movie is not found...</p>
      ) : (
        <div className="detail-content">
          <MovieDetailSection movieDetails={movieDetails} />
          <Link to={`/movie/${movieId.id}/similar`} className="similar-movie">
            Similar Movies
            <svg
              className="similar-movie-icon"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z"></path>
            </svg>
          </Link>
        </div>
      )}
    </section>
  );
};
