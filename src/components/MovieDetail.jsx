import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../api";

export const MovieDetail = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await fetchMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDetails();
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <h2>{movie.title}</h2>
    </div>
  );
};
