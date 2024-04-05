import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);
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

  return (
    <div className="movie-container-wrapper" onMouseMove={handleMouseMove}>
      <div className="movie-container" ref={containerRef}>
        {movies.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`}>
            <div className="movie-card">
              <img
                src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
          </Link>
        ))}
      </div>
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
