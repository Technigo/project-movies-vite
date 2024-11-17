// MovieInfo.jsx

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieInfoPage } from "../components/MovieInfoPage";

export const MovieInfo = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=fd4c86caaf652cf07d8d4560d025a8f8&language=en-US`;

  const fetchMovieDetails = async () => {
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error("Failed to fetch movie details");
      }
      const data = await response.json();

      console.log("Fetched data:", data);

      setMovie(data);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
  }, [movieId]);

  if (!movie) return <p>Loading...</p>;

  return (
    <>
      <MovieInfoPage
        background={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
        poster={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        title={movie.title}
        rating={movie.vote_average}
        overview={movie.overview}
      />
    </>
  );
};