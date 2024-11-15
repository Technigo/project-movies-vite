import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MovieDetails } from "../components/MovieDetails";

export const MovieProfile = () => {

  
    //state for storing fetched movie data, initialized as null
    const [ movie, setMovie] = useState(null);

    // Extract the is param(eter) from the URL (movie id)
    const { id } = useParams();
    console.log("Movie ID:", id); // Log to verify if the ID is correct
  
    useEffect(() => {
      const apiEnv = import.meta.env.VITE_API_KEY;
      console.log("API Key:", apiEnv); // Log the API key
      const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiEnv}&language=en-US`;
      console.log("fetching data from:", url)
    
      const fetchMovieDetails = async () => {  
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error('Failed to fetch movies details');
          }
          const json = await response.json();
          setMovie(json);
          console.log("Fetched movies details:", json); // Logs fetched movies to the console
        } catch (error) {
          console.log("Error fetching data", error);
        }
      };
  
      fetchMovieDetails()
    }, [id]);

    if (!movie) {
      return <div>Loading...</div>
    }


    //backdrop_path
    //poster_path={movie.poster_path}
    //title=movie.title
    //rating movie.vote_average
    //movie.overview

    return (
      <div>
        <div className="backdrop">
          <div className="styled-link"> 
          </div>
          <MovieDetails
            poster_path={movie.poster_path}
            title={movie.title} 
            rating={movie.vote_average}
            overview={movie.overview}
         />
        </div>
      </div>
    )
};