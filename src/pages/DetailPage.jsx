import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { apiKey } from "../config.json";
import "./DetailPage.css";

export const DetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Failed to load movie. Please check the url or try again later"
          );
        }
        return response.json();
      })
      .then((json) => {
        setMovie(json);
        console.log(json);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [id]);

  return (
    (movie && (
      <section className="detail-page">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          className="backdrop"
        ></img>
        <div className="go-back-container">
          <Link to="/" className="link">
            <img src="" alt="back-arrow" className="arrow" />
            <span> Go back</span>
          </Link>
        </div>
        <div className="summary">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            className="summary-poster"
          ></img>
          <div className="summary-detail">
            <h1 className="heading">
              <span className="title">{movie.title}</span>
              <span className="rating">{movie.vote_average}</span>
            </h1>
            <p className="plot">{movie.overview}</p>
          </div>
        </div>
      </section>
    )) ||
    (error && <div>{error}</div>)
  );
};
