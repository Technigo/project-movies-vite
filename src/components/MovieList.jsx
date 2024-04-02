//const key = "e185d0927f85272fbd0fd2526ecf0657";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchApi = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=e185d0927f85272fbd0fd2526ecf0657&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((movies) => {
        console.log(movies);
        setMovies(movies.results);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchApi();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movies">
      {movies.map((movie) => (
        <ul key={movie.id}>
          <li>
            <Link to={`movie/${movie.id}`}>
              {movie.title} {movie.release_date}
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
};
