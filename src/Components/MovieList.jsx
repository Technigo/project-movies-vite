import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styling/movielist.css";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);
  const apiKey = import.meta.env.VITE_MY_API_KEY;
  const baseURL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetch(`${baseURL}/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        const results = data.results || [];
        const uniqueMovies = Array.from(
          new Map([...movieList, ...results].map(movie => [movie.id, movie])).values()
        ); // Removes duplicates
        setMovieList(uniqueMovies);
      })
      .catch((error) => console.error("Error fetching: ", error));
  }, [page]);

  return (
    <div>
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
