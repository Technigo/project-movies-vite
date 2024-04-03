import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=bd8739b499ca4e3054f829b6e1e0d8e8&language=en-US&page=1`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setMovie(data));
  }, []);
  console.log(movie);

  if (!movie) {
    return <h1></h1>;
  }

  return <h1>movie page {movie.title}</h1>;
};
