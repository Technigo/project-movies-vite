import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchPopularMovies } from "../api/movieApi";
import "./Home.css";

export const Home = () => {
  // State to hold the list of movies
  const [movies, setMovies] = useState([]); // Initial state is an empty array
  // Fetch data when the component mounts
  useEffect(() => {
    // Asynchronous function to load movies
    const loadMovies = async () => {
      try {
        // Fetch popular movies using the imported API function
        const movies = await fetchPopularMovies();
        // Update the state with the fetched movies
        setMovies(movies);
      } catch (error) {
        console.error("Error loading movies:", error);
      }
    };

    loadMovies();
  }, []);

  return (
    <div className="home-container">
      <div className="title-container"></div>
      <div className="movie-boxes">
        {movies.map((movie) => (
          // Each movie is wrapped in a Link for navigation to its details page
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <div className="movie-box">
              {/* Information displayed when hovering over a movie */}
              <div className="hover-info">
                <h1 className="title">{movie.title}</h1>
                <h4 className="release-date">Released {movie.release_date}</h4>
              </div>
              <img
                className="movie-poster"
                // Dynamically generate image URL
                src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
                // Use the movie title as alt text for accessibility
                alt={movie.title}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
