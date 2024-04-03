import "./Detail.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { DetailComp } from "../../components/DetailComp/DetailComp";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";
import { LoadingSpinner } from "../../components/LoadingSpinner/LoadingSpinner";

export const Detail = () => {
  // State variables to manage movie data, error, and loading state.
  const [movie, setMovie] = useState();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Get the 'id' parameter from the URL.
  const { id } = useParams();

  // Get the API key from environment variables.
  const api_key = import.meta.env.VITE_OPENDB_KEY;

  const detailApi = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`;

  // Function to fetch movie details from the API.
  const fetchDetails = async () => {
    try {
      // Send a GET request to the detailApi URL and await the response.
      const response = await fetch(detailApi);
      // Check if the response indicates an error.
      if (!response.ok) {
        // If the status code is 404 (Not Found), set the 'error' state to true.
        if (response.status === 404) {
          // Invalid movie ID, show the 'not found' page.
          setError(true);
        } else {
          // If the status code is not in the 200-299 range, throw an error.
          throw new Error("Failed to fetch movie details");
        }
      }
      // Parse the response body as JSON and store it in the 'data' variable.
      const data = await response.json();
      console.log("Movie details fetching data", data);
      // Set the 'movie' state to the fetched movie data.
      setMovie(data);
      // After a delay of 1 second (1000 milliseconds), set 'isLoading' to false.
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      // If an error occurs during the try block (e.g., network error), handle it here.
      console.error("Error fetching data", error);
      // Set 'isLoading' to false and 'error' to true to handle the error state.
      setIsLoading(false);
      setError(true);
    }
  };

  // useEffect hook to run fetchDetails when the 'id' parameter changes.
  useEffect(() => {
    fetchDetails();
  }, [id]);

  // Render 'not found' page, loading spinner, or movie details.
  return error ? (
    <NotFoundPage /> // Display 'not found' page.
  ) : isLoading ? (
    <LoadingSpinner /> // Display loading spinner.
  ) : (
    <DetailComp movie={movie} /> // Display movie details.
  );
};
