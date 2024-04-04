import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { NotFound } from "./NotFound";

export const MovieDetails = ({ movies }) => {
  const { movieTitle } = useParams();
  const [genres, setGenres] = useState(null);

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
    <>
      <div className="detailsContainer">
        <img
          src={`https://image.tmdb.org/t/p/w300${movieInfo.backdrop_path}`}
          alt={`${movieInfo.title} poster`}
        />
        <h2 className="movieTitle">{movieInfo.title}</h2>
        {movieInfo.title !== movieInfo.original_title ? (
          <h3>Original title: {movieInfo.original_title}</h3>
        ) : null}
        <h2 className="movieRating">{movieInfo.vote_average.toFixed(1)}</h2>
        {genres.map((genre) => (
          <ul key={genre.id}>
            <li>{genre.name}</li>
          </ul>
        ))}
        <p className="movieSummary">{movieInfo.overview}</p>
      </div>
      <Link to="/movies">Back to Movies</Link>
    </>
  );
};
