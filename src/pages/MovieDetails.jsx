import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMovieDetails } from "../api/tmdb";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      const data = await fetchMovieDetails(id);
      setMovie(data);
    };
    getMovieDetails();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <button onClick={() => navigate(-1)} className="btn mb-4">
        Go back
      </button>
      <h1 className="text-3xl font-bold">{movie.title}</h1>
      <p>{movie.overview}</p>
    </div>
  );
};

export default MovieDetails;
