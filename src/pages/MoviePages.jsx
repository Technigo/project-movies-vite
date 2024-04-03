import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const MoviePages = () => {
  const [movieInfo, setMovieInfo] = useState();
  const params = useParams();
  const movie_id = params.movieID;
  const movieURL = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=e58923a817ec3772f69470b86e481a40&language=en-US`;

  useEffect(() => {
    const fetchMovieInfo = () => {
      fetch(movieURL)
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          setMovieInfo(json);
        });
    };

    fetchMovieInfo();
  }, [movieURL]);

  if (!movieInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w780${movieInfo.backdrop_path}`}
      ></img>
      <p>{movieInfo.title}</p>
      <p>{movieInfo.release_date}</p>
    </div>
  );
};
export default MoviePages;
