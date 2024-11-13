// This component displays detailed information about a particular movie

import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { BASE_URL, API_KEY } from "../utils/apiConfig";
import { MovieDetails } from "../components/MovieDetails";

export const DetailPage = () => {
  // Gets the dynamic ID parameter from the URL
  const { id } = useParams();

  // State to store fetched movie data
  const [movie, setMovie] = useState(null);

  // State to track loading status
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  // useEffect hook to fetch movie data when the component mounts or id changes
  useEffect(() => {
    // Function to fetch movie data
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch movie details");
        }

        const data = await response.json();
        setMovie(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Link to="/">Back to Home</Link>
      {movie && <MovieDetails movie={movie} />}
    </div>
  );
};
