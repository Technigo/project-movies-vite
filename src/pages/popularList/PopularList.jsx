import { useEffect, useState } from "react";
import { MovieCard } from "../../components/movieCard/MovieCard";
import "./popularList.css";

// Variables global for PopularList.jsx
const API_KEY = import.meta.env.VITE_MOVIEDB_KEY; // import.meta.env-approach for storing api-key, so that it won't get exposed to anyone. At the same time added "netlify.toml" for accurate redirects - neccessary when using React Router.
const URL_START = "https://api.themoviedb.org/3/movie/";
const popularMovies = `${URL_START}popular?api_key=${API_KEY}&language=en-US&page=1`;

export const PopularList = () => {
  const [movies, setMovies] = useState(null);

  // Function to fetch movies from the MovieDB-API
  const fetchData = async () => {
    try {
      const response = await fetch(popularMovies);

      if (!response.ok) {
        throw new Error("Response was not ok"); // Handle error, show an error-message if something goes wrong.
      }

      const data = await response.json();
      setMovies(data);

    } catch (error) {
      console.error("Something went wrong!") // Log the error to the console
    }
  }


  // Handles the fetch from above
  useEffect(() => {
    fetchData();
  }, []);

  return (
    // If there is movie-data, then send the results to MovieCard.jsx, otherwise show a loading message. Here we could add a better looking loader.
    <section className="popular-movies">
      {movies ? <MovieCard movieData={movies.results} /> : <p>Loading...</p>}
    </section>
  )
}
