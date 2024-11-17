import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchMovieDetails, fetchMovieCredits } from "../api/tmdb";
import { slugify } from "../utils/slugify";

const useFetchMovieDetails = (idSlug) => {
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Parse id and slug from idSlug
    const separatorIndex = idSlug.indexOf("-");
    if (separatorIndex === -1) {
      navigate("/not-found", { replace: true });
      return;
    }

    const idStr = idSlug.substring(0, separatorIndex);
    const slugStr = idSlug.substring(separatorIndex + 1);

    const idNumber = parseInt(idStr, 10);
    if (isNaN(idNumber)) {
      navigate("/not-found", { replace: true });
      return;
    }

    const getMovieData = async () => {
      try {
        const [movieData, creditsData] = await Promise.all([
          fetchMovieDetails(idNumber),
          fetchMovieCredits(idNumber),
        ]);

        if (movieData) {
          const actualSlug = slugify(movieData.title);

          if (actualSlug !== slugStr) {
            navigate(`/movie/${idNumber}-${actualSlug}`, { replace: true });
            return;
          }

          setMovie(movieData);
        } else {
          navigate("/not-found");
          return;
        }

        if (creditsData) {
          setCredits(creditsData);
        }
      } catch (error) {
        console.error("Error fetching movie data:", error);
        setError("Failed to fetch movie details.");
        navigate("/not-found");
      } finally {
        setLoading(false);
      }
    };

    getMovieData();
  }, [idSlug, navigate]);

  return { movie, credits, loading, error };
};

export default useFetchMovieDetails;
