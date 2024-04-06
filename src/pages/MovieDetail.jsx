/* eslint-disable react-hooks/exhaustive-deps */
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { MovieDetailSection } from "../components/MovieDetailSection";

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
      {movieDetails && <MovieDetailSection movieDetails={movieDetails} />}
    </section>
  );
};
