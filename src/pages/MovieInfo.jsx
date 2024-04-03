import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MovieDetails } from "../components/MovieDetails/MovieDetails";
import { NotFoundPage } from "./NotFoundPage";
import { Loadingspinner } from "../components/LoadingSpinner/Loadingspinner";

export const MovieInfo = () => {
  //State variables to manage movie data, errors and loading-state
  const [movieInfo, setMovieInfo] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  // Get id-parameter from Url with help of useParams
  const { id } = useParams();
  /* const movieInfoUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`; */

  return <div>MovieInfo</div>;
};
