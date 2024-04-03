import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const movieURL =
    "https://api.themoviedb.org/3/movie/popular?api_key=e58923a817ec3772f69470b86e481a40&language=en-US&page=1";

  useEffect(() => {
    const fetchMovies = () => {
      fetch(movieURL)
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          setMovies(json.results);
        });
    };

    fetchMovies();
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <p>{movie.title}</p>
          <Link key={movie.id} to={`/movie/${movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} />
          </Link>
        </div>
      ))}
    </div>
  );
};
export default Home;
