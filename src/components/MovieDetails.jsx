import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { NotFound } from "./NotFound";
import "../styling/MovieDetails.css";

export const MovieDetails = ({ movies }) => {
  const { movieTitle } = useParams();
  const [genres, setGenres] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [imageSize, setImageSize] = useState("w780");

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth > 1499) {
      setImageSize("original");
    } else if (windowWidth > 1023) {
      setImageSize("w1280");
    } else {
      setImageSize("w780");
    }
  }, [windowWidth]);

  // Check if the movies data has been fetched
  if (!movies) {
    return <div>Loading...</div>;
  }

  const movieInfo = movies.find(
    (m) => m.title.toLowerCase().replace(/ /g, "-") === movieTitle
  );

  // Check if the movie exists
  if (!movieInfo) {
    return (
      <div>
        <NotFound />
      </div>
    );
  }

  const fetchGenres = () => {
    const genreUrl = `https://api.themoviedb.org/3/movie/${movieInfo.id}?api_key=555122904f9aa5a9df5e76f87cb061f7`;
    fetch(genreUrl)
      .then((response) => response.json())
      .then((data) => setGenres(data.genres))
      .catch((error) => console.error("Error fetching genres", error));
  };

  fetchGenres();

  // Check if the genres exists
  if (!genres) {
    return <div>Genre not found!</div>;
  }

  return (
    <div
      className="details-container"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/${imageSize}${movieInfo.backdrop_path})`,
      }}
    >
      <div className="details-card">
        <img
          className="movie-image"
          src={`https://image.tmdb.org/t/p/w300${movieInfo.poster_path}`}
          alt={`${movieInfo.title} poster`}
        />
        <div className="movie-text">
          <h2 className="movie-title">{movieInfo.title}</h2>
          {movieInfo.title !== movieInfo.original_title ? (
            <h3 className="original-title">{movieInfo.original_title}</h3>
          ) : null}
          <h2 className="movie-ranking">
            ⭐{movieInfo.vote_average.toFixed(1)}
          </h2>
          <ul className="genre-list">
            {genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
          <p className="movieSummary">{movieInfo.overview}</p>
        </div>
      </div>
      <Link to="/movies" className="back-link">
        Back to Movies
      </Link>
    </div>
  );
};
