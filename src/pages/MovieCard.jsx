import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoStar } from "react-icons/io5";
import "./MovieCard.css";

export const MovieCard = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  const apiKey = "76898be6bb8657c4eadeb40367146dec";
  const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${apiKey}&language=en-US&page=1`;

  const imageBaseUrl = "http://image.tmdb.org/t/p/";

  useEffect(() => {
    fetch(movieDetailsUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("404 Page not found");
        }
        return response.json();
      })
      .then((movieData) => setMovieDetails(movieData))
      .catch((error) => {
        if (error.message === "404 Page not found") {
          navigate("/notfound");
        }
      });
  }, [movieDetailsUrl, navigate]);

  return (
    <section
      className="background"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path})`,
      }}>
      <div className="arrow-box" onClick={() => navigate(-1)}>
        <IoIosArrowDropleftCircle className="arrow-icon" /> <p>Back to movies</p>
      </div>
      <div className="movie-content-box">
        <img src={`${imageBaseUrl}w342${movieDetails.poster_path}`} alt={`a movie poster of ${movieDetails.title}`} />
        <div className="movie-info-box">
          <div>
            <h1>{movieDetails.title}</h1>
            <p>{movieDetails.genres && movieDetails.genres.map((genre) => genre.name).join(", ")}</p>
          </div>
          <div className="rating-time-box">
            <div className="rating">
              <IoStar className="star-icon" />
              <p>{parseFloat(movieDetails.vote_average).toFixed(1)}</p>
            </div>
            <p>{movieDetails.runtime} min</p>
          </div>
          <p>{movieDetails.overview}</p>
          <p>Released {movieDetails.release_date}</p>
        </div>
      </div>
    </section>
  );
};
