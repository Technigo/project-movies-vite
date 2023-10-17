// Route: /movies/:id, component: Detail

// This route expects a movie ID in the URL and is responsible for showing more details about a movie after you click on it. It uses useParams from react-router-dom to get the id from the URL and then passes that into an API call (within useEffect) to themoviedb.org to fetch details about a single movie, then puts the response into state using useState and finally renders it onto the page.

//MAYBE MAKE SOME COMPONENTS FOR the Movie display (like the card)?????

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

export const MovieDetails = () => {
  //*******API call to fetch details about a single movie */

  // Fetching a movie's details
  // https://api.themoviedb.org/3/movie/{movie_id}?api_key={api_key}&language=en-US
  // Don't forget to replace {api_key} with your API key and {movie_id} with the id you get from the url via react-router if you copy and paste this.

  //Fetching movie details API: https://api.themoviedb.org/3/movie/{movie_id}?api_key={api_key}&language=en-US

  const OurMovieDetailAPI = `https://api.themoviedb.org/3/movie/{movie_id}?api_key=003a2d9ebc845f57f76c3c02dbd08f13&language=en-US`;

  const [movie, setMovie] = useState([]);

  const OurMovieAPI = `https://api.themoviedb.org/3/movie/popular?api_key=003a2d9ebc845f57f76c3c02dbd08f13&language=en-US&page=1`;

  useEffect(() => {
    const fetchMoviesList = async () => {
      try {
        const response = await fetch(OurMovieAPI);
        if (!response.ok) {
          throw new Error("Network Reponse Error");
        }
        const json = await response.json();
        setMovies(json.results);
        console.log(json.results);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchMoviesList();
  }, []);

  //****************************************** */

  const { movieDetail } = useParams();
  const movieMatched = movies.find((p) => p.title === movieDetail);

  console.log(`this is the movie matched variable:`, movieMatched);

  return (
    <div>
      <h1> movie details</h1>
      <p>Title: {movieMatched.title}</p>
    </div>
  );
};
