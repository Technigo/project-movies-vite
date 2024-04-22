import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./MovieDetail.css";

const MovieDetail = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const accessToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NmUzYzJiN2NlZDEzMTVkYzNjNWExNGQzMGQ4YjEyZiIsInN1YiI6IjY2MWZiOGMwYTM5ZDBiMDE2MzU1OTkyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yWrQepa05HfohLsm2nxvGFfiAIclRHrpMVi38V7N1L8";
  const apiKey = "76e3c2b7ced1315dc3c5a14d30d8b12f";

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };

    fetchMovie();
  }, [id, accessToken, apiKey]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const formattedRating = (
    <span>
      <span style={{ color: "yellow" }}>★</span> {movie.vote_average.toFixed(1)}
    </span>
  );

  return (
    <div className="film-page-container">
      <div className="background-image" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` }} />
      <Link to="/" className="link-film-page">Movies</Link>
      <div className="movie-section">
        <div className="movie-poster">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="poster-image" alt={movie.title}/>
        </div>
        <div className="movie-details">
          <div className="movie-info">
            <h2 className="movie-title">{movie.title}</h2>
            <p className="movie-rating">{formattedRating}</p>
            <p className="movie-overview">{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
