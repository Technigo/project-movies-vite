import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MovieDetails } from "../../components/MovieDetails/MovieDetails";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";
import { Loadingspinner } from "../../components/LoadingSpinner/Loadingspinner";
import "./MovieInfo.css";

export const MovieInfo = () => {
  //State variables to manage movie data, errors and loading-state
  const [movieInfo, setMovieInfo] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  // Get id-parameter from Url with help of useParams
  const { id } = useParams();

  // Get api-key(apiEnv) from .env file
  const apiEnv = import.meta.env.VITE_OPENDB_KEY;
  // API endpoint to fetch movie details
  const movieInfoUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiEnv}&language=en-US`;

  useEffect(() => {
    const fetchMovieInfo = async () => {
      try {
        // Send GET request to the movieInfoUrl and await response
        const response = await fetch(movieInfoUrl);
        if (!response.ok) {
          // If status code is 404, set error state to true.
          if (response.status === 404) {
            // Invalid movie ID, show not found-page
            setError(true);
          } else {
            // If status code is other, throw error
            throw new Error("Failed to fetch movie details");
          }
        }
        // If all is good, store the JSON-data in the data-variable
        const data = await response.json();
        console.log("Movie info fetching data", data);
        // Set the movieInfo-state to fetch movie data
        setMovieInfo(data);
        // After delay of 500 milliseconds, set setLoading to false
        setTimeout(() => {
          setLoading(false);
        }, 500);
      } catch (error) {
        console.error("Error fetching data", error);
        //Set loadingState to false and error to true
        setLoading(false);
        setError(true);
      }
    };
    fetchMovieInfo();
  }, [movieInfoUrl]);

  // Use ternary operator depending on if it's error, if it's loading or if it should show movieinfo
  return error ? (
    <NotFoundPage />
  ) : loading ? (
    <Loadingspinner />
  ) : (
    <MovieDetails movieDetails={movieInfo} />
  );
};
