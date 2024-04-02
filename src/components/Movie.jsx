//const key = "e185d0927f85272fbd0fd2526ecf0657";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Movie = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchApi = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=e185d0927f85272fbd0fd2526ecf0657&language=en-US&page=1"
    )
      .then((response) => response.json)
      .then((movies) => setMovie(movies));
    console
      .log(movie)

      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="movies">
      {movie.map((movie) => (
        <ul>
          <li>
            <Link
              to={`movie/:${movie.titletoLowerCase().replace(/ /g, "-")}`}
              key={movie.title}
            >
              {movie.title}
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
};
