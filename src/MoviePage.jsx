import "./MoviePage.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// here we fetch each movie details by its ID
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

  return (
    <div className="MoviePage">
      <img
        className="MoviePage-backgroundImage"
        src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
        alt=""
      />
      <div className="MoviePage-info">
        <img
          className="MoviePage-poster"
          src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
          alt=""
        />
        <div className="MoviePage-textInfo">
          <div className="MoviePage-heading">
            <span className="MoviePage-title">{movie.title}</span>{" "}
            <span className="MoviePage-votes">
              <img src="/star.svg" alt="" />
              {movie.vote_average.toFixed(1)}
            </span>
          </div>

          <div className="MoviePage-overview">{movie.overview}</div>
        </div>
      </div>

      <Link className="MoviePage-backLink" to="/">
        <svg
          className="MoviePage-backIcon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
        >
          <path
            d="M27 14.5C27 7.596441 21.4035594 2 14.5 2S2 7.596441 2 14.5 7.5964406 27 14.5 27 27 21.403559 27 14.5zm-19.3388348-.353553l7.4852814-7.485282c.1952622-.195262.5118446-.195262.7071068 0l2.1213203 2.121321c.1952622.195262.1952622.511844 0 .707106L12.9644661 14.5l5.0104076 5.010408c.1952622.195262.1952622.511844 0 .707106l-2.1213203 2.121321c-.1952622.195262-.5118446.195262-.7071068 0l-7.4852814-7.485282c-.19799-.19799-.197989-.509117 0-.707106z"
            fill="#fff"
            fillRule="evenodd"
          ></path>
        </svg>
        Movies
      </Link>
    </div>
  );
};
