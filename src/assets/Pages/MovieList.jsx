/* global process */
import { useState, useEffect } from "react";
import { Oval } from "react-loader-spinner";
import { MovieListCard } from "../components/MovieListCard/MovieListCard"; // Import the MovieListCard component
import "../components/MovieListCard/MovieListCard.css";
import "./MovieList.css"; // Import the styles for MovieList

export const MovieList = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&language=en-US&page=1`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const json = await response.json();
        setList(json.results);
        console.log(json.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <section className="movie-list-page">
      <div className="hero-section">
        <h1>The Movie Zone</h1>
      </div>

      <div className="movie-list">
        {/* Mapping over the list of movies to create MovieListCard components */}
        {list.map((movie) => (
          <MovieListCard
            key={movie.id}
            movieTitle={movie.title}
            releaseDate={movie.release_date}
            movieId={movie.id}
            moviePoster={movie.poster_path}
          />
        ))}
      </div>

      {/* Displaying a loading spinner if 'loading' is true */}
      {loading && (
        <div className="loader-container">
          <Oval />
        </div>
      )}
    </section>
  );
};

export default MovieList;
