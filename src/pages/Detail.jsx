import "./Detail.css";
import { DetailComp } from "../components/detail/DetailComp";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { NotFoundPage } from "./NotFoundPage";

export const Detail = () => {
  const [movie, setMovie] = useState();
  const [error, setError] = useState(false);
  const { id } = useParams();

  const api_key = import.meta.env.VITE_OPENDB_KEY; // Change later to pass as a promt instead.
  const detailApi = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`;

  // Function to fetch movie details from the API.
  const fetchDetails = async () => {
    try {
      const response = await fetch(detailApi);
      if (!response.ok) {
        if (response.status === 404) {
          // Invalid movie ID, show the 'not found' page.
          setError(true);
        } else {
          throw new Error("Failed to fetch movie details");
        }
      } else {
        const data = await response.json();
        console.log("Movie details fetching data", data);
        setMovie(data);
      }
    } catch (error) {
      console.error("Error fetching data", error);
      setError(true);
    }
  };

  // useEffect hook to run fetchDetails when the 'id' parameter changes..
  useEffect(() => {
    fetchDetails();
  }, [id]);

  if (error) {
    return <NotFoundPage />; // Display 'not found' page.
  }

  return <>{movie ? <DetailComp movie={movie} /> : <div>Loading...</div>}</>;
};
