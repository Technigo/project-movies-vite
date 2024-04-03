import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import greenDots from "../assets/animations/greendots.json";
import star from "../../public/star.svg";

export const Movie = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();
  const cleanedId = id.replace(":", "");
  console.log(id, cleanedId);

  const fetchApi = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${cleanedId}?api_key=e185d0927f85272fbd0fd2526ecf0657&language=en-US`
    )
      .then((response) => response.json())
      .then((movie) => {
        console.log(movie);
        setMovie(movie);
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

  return (
    <>
      {loading && (
        <div className="loading">
          <Lottie
            animationData={greenDots}
            loop
            autoPlay
            style={{ width: 200, height: 200 }}
          />
        </div>
      )}
      {!loading && (
        <div className="movie-component">
          <Link to="/">
            <button id="go-back" type="button">
              Movies
            </button>
          </Link>
          <div className="movie-information">
            <img
              src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}
              id="poster"
            />
            <div className="details">
              <h1>{movie.title}</h1>
              <div>
                {Math.round(movie.vote_average * 10) / 10}{" "}
                <img className="movie-star" src={star} />
              </div>
              <p>{movie.overview}</p>
            </div>
          </div>
          <img
            src={`http://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
            id="backdrop"
          />
        </div>
      )}
    </>
  );
};
