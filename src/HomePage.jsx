import { useEffect, useState } from "react";
import dayjs from "dayjs";
import "./HomePage.css";

export const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=bd8739b499ca4e3054f829b6e1e0d8e8&language=en-US&page=1`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <div className="HomePage">
      <h1 className="HomePage-title">movies list</h1>
      {/* created this early to help sketch out the structure of the page before fetching  */}
      <div className="HomePage-movies">
        {movies.map((movie) => (
          <a
            key={movie.id}
            className="HomePage-movie"
            href={`/movies/${movie.id}`}
          >
            {/* <a href={`/movies/${movie.id}`}>{movie.title}</a> */}

            {/* https://developer.themoviedb.org/docs/image-basics */}
            {/* we have to build our own image URL, but that's helpful
          so that we can pick the right size of image for what we're using it for  */}
            <img
              className="HomePage-moviePoster"
              src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
              alt=""
            />
            <div className="HomePage-movieInfo">
              <h2 className="HomePage-movieTitle">{movie.title}</h2>
              <p className="HomePage-movieReleaseDate">
                {dayjs(movie.release_date).format("MMMM D, YYYY")}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
