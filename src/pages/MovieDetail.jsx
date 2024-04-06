/* eslint-disable react-hooks/exhaustive-deps */
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { MovieDetailSection } from "../components/MovieDetailSection";
import { TopMenu } from "../components/TopMenu";

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
        <div>
          <MovieDetailSection movieDetails={movieDetails} />
          <Link to={`/movie/${movieId.id}/similar`}>Similar Movies</Link>
        </div>
      )}
    </section>
  );
};
