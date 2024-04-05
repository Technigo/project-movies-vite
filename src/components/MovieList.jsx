import { useState, useEffect, useRef } from "react";
import { MovieDetails } from "./MovieDetails";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing?api_key=16acb76adef1d58ee25a3967ffcab15d"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch movie data");
        }
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchMovies();
  }, []);

  const scrollLeft = () => {
    containerRef.current.scrollLeft -= 30;
  };

  const scrollRight = () => {
    containerRef.current.scrollLeft += 30;
  };

  const handleMouseMove = (e) => {
    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();
    const mouseX = e.clientX;
    if (mouseX < containerRect.left + 80) {
      scrollLeft();
    } else if (mouseX > containerRect.right - 80) {
      scrollRight();
    }
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseMovieDetails = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="movie-container-wrapper" onMouseMove={handleMouseMove}>
      <div className="movie-container" ref={containerRef}>
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="movie-card"
            onClick={() => handleMovieClick(movie)}
          >
            <img
              src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
        ))}
      </div>
      {selectedMovie && <MovieDetails movieInfo={selectedMovie} />}
      <div className="credit-box">
        <p>
          <span className="bold">Credits:</span>
        </p>
        <p>Photo from Unsplash by Felix Mooneeram</p>
        <p>Design inspired by Lora Staneva from dribbble</p>
        <p>
          <span className="bold">Project by</span></p>
        <p>Cornelia Dahlin for Technigo bootcamp</p>
      </div>
    </div>
  );
};
