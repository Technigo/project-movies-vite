import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styling/movielist.css";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1); // Pagination
  const apiKey = import.meta.env.VITE_MY_API_KEY;
  const baseURL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetch(`${baseURL}/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        const results = data.results || [];
        setMovieList((prevList) => [...prevList, ...results]); // Append to existing list
      })
      .catch((error) => console.error("Error fetching: ", error));
  }, [page]);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="genres">
          <a href="#action">Action</a>
          <a href="#comedy">Comedy</a>
          <a href="#drama">Drama</a>
          <a href="#horror">Horror</a>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <img src="/search-icon.png" alt="Search Icon" />
        </div>
      </nav>

      {/* Movie List */}
      <div className="home-page-container">
        {movieList.map((movie) => (
          <Link key={movie.id} to={`/movies/${movie.id}`} className="movie-card-link">
            <div className="movie-card">
              <div className="image-container">
                <img
                  src={
                    movie.poster_path
                      ? `http://image.tmdb.org/t/p/w342/${movie.poster_path}`
                      : "https://via.placeholder.com/342x500?text=No+Image"
                  }
                  alt={`Poster of ${movie.title}`}
                />
                <div className="overplay">
                  <h1>{movie.title}</h1>
                  <p>Release: {movie.release_date}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <button onClick={() => setPage(page + 1)} className="load-more">
        Load More
      </button>
    </div>
  );
};

export default MovieList;
