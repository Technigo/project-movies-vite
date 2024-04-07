import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export const MovieList = () => {
  // State to store the list of movies
  const [movies, setMovies] = useState([]);
  // Reference to the container div to enable scrolling
  const containerRef = useRef(null);
  // State to track the index of the currently focused movie card
  const [focusedIndex, setFocusedIndex] = useState(-1);

  // Fetch movies from the API when the component mounts
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

  // Scroll the container left or right by 30 pixels
  const scrollLeft = () => {
    containerRef.current.scrollLeft -= 30;
  };

  const scrollRight = () => {
    containerRef.current.scrollLeft += 30;
  };

  // Handle mouse movement to scroll the container horizontally
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

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    switch (e.key) {
      case "ArrowLeft":
        setFocusedIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        break;
      case "ArrowRight":
        setFocusedIndex((prevIndex) =>
          Math.min(prevIndex + 1, movies.length - 1)
        );
        break;
      default:
        break;
    }
  };

  return (
    <div
      className="movie-container-wrapper"
      onMouseMove={handleMouseMove}
      onKeyDown={handleKeyDown} // Add keydown event listener
      tabIndex={0} // Allow the div to receive focus
    >
      <div className="movie-container" ref={containerRef}>
        {/* Render movie cards */}
        {movies.map((movie, index) => (
          <Link key={movie.id} to={`/movie/${movie.id}`}>
            <div
              className={`movie-card ${
                index === focusedIndex ? "focused" : ""
              }`}
              tabIndex={index} // Allow the movie card to receive focus
              onFocus={() => setFocusedIndex(index)}
            >
              <img
                src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
          </Link>
        ))}
      </div>
      {/* Credits section */}
      <div className="credit-box">
        <p>
          <span className="bold">Credits:</span>
        </p>
        <p>Photo from Unsplash by Felix Mooneeram</p>
        <p>Design inspired by Lora Staneva from dribbble</p>
        <p>
          <span className="bold">Project by</span>
        </p>
        <p>Cornelia Dahlin for Technigo bootcamp</p>
      </div>
    </div>
  );
};
