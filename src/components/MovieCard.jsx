import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { MovieDetails } from "./MovieDetails";

export const MovieCard = () => {

  const [movieData, setMovieData] = useState(null)
  const [isLoading, setIsLoading] =useState(true);
  const { id } = useParams()
  // console.log("movie_id:", id);

  useEffect(() => {
    const api_key = "7a6dc3dad2658fff3044692170b4b00a";
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`;
    // console.log("API Request URL:", url);

    const fetchMovies = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was NOT OK!");
        }

        const json = await response.json();
        console.log("Response Status Code:", response.status);
        setMovieData(json)
        setIsLoading(false);
        window.scrollTo({ top: 0, behavior: "smooth"});
      }
      catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const delay =setTimeout(()=> {
      fetchMovies()
    }, 500);

    return () => clearTimeout(delay);
  }, [id])

  
  return (
    <>
      
      
    {!isLoading && movieData && <Link to="/">Back</Link>}
      {!isLoading && movieData && <MovieDetails movie={movieData} />}
   </>
  )
}