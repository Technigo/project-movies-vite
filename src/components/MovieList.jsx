import { useState, useEffect, useRef } from "react";

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

  // Function to scroll movie container to the left & right
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
    if (mouseX < containerRect.left + 50) {
      scrollLeft();
    } else if (mouseX > containerRect.right - 50) {
      scrollRight();
    }
  };

  return (
    <div className="movie-container-wrapper" onMouseMove={handleMouseMove}>
      <div className="movie-container" ref={containerRef}>
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
