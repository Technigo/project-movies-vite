import { useEffect, useState } from "react";

export const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=bd8739b499ca4e3054f829b6e1e0d8e8&language=en-US&page=1`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <div>
      <h1>movies list</h1>
      {/* created this early to help sketch out the structure of the page before fetching  */}
      {movies.map((movie) => (
        <div key={movie.id}>
          <a href={`/movies/${movie.id}`}>{movie.title}</a>
          <br />
          {/* https://developer.themoviedb.org/docs/image-basics */}
          {/* we have to build our own image URL, but that's helpful
          so that we can pick the right size of image for what we're using it for  */}
          <img
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt=""
          />
        </div>
      ))}
    </div>
  );
};
