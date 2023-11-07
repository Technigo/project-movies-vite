import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetail = ({ apiKey }) => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
      );
      const data = await response.json();
      setMovie(data);
    };

    fetchMovie();
  }, [id, apiKey]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
        alt={movie.title}
      />
      <p>{movie.overview}</p>
    </div>
  );
};

export default MovieDetail;
