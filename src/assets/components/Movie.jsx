import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import "./Movie.css";

export const Movie = () => {
  const [movieList, setMovieList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const apiEnv = import.meta.env.VITE_OPENDB_KEY;

  const getMovie = useCallback(async () => {
    const API = `https://api.themoviedb.org/3/movie/popular?api_key=${apiEnv}&language=en-US&page=${currentPage}`;
    try {
      const response = await fetch(API);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await response.json();
      setMovieList(json.results);
    } catch (error) {
      alert("Failed fetching movies - make some 🍿 and try again" + error);
    }
  }, [apiEnv, currentPage]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };


  return (
    <div className="movie-wrapper">
      <h1>🍿 Popular movies 🍿</h1>

      <ul>
        {movieList.map((movie) => (
          <li key={movie.id}>
            <Link to={`/details/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />


              <div className="movie-info">
                <h2 className="title">{movie.title}</h2>
                <p className="released">Released: {movie.release_date.split("-").reverse().join("/")}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="page-number">Page {currentPage}</div>
      <div className="paginate">
        <button className="previous-btn" onClick={handlePreviousPage} alt=" Previous Page" disabled={currentPage === 1}>
        </button>
        <button className="next-btn" alt="Next Page" onClick={handleNextPage}>
        </button>
      </div>
    </div>
  );
};
