import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./MovieDetail.css";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const apiKey = "db09d9e6205d4ff413df728dd90904bb";

    const fetchMovieDetail = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
        );
        if (!response.ok) {
          throw new Error("Something went wrong");
        }

        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Something went wrong", error);
      }
    };

    fetchMovieDetail();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="moviedetail-container">
        <img
          src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
          alt={movie.title}
          className="background-img"
        />
        <nav>
          <ul className="back-button">
            <li>
              <Link to="/">←</Link>
            </li>
          </ul>
        </nav>
        <div className="moviedetail">
          <div className="movie-img">
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
          <div className="movie-text">
            <h1>{movie.title}</h1>
            <p>⭐{movie.vote_average}</p>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
