import { Link, useParams } from "react-router-dom";

export const MovieDetails = ({ movies }) => {
  const { movieTitle } = useParams();

  // Check if the movies data has been fetched
  if (!movies) {
    return <div>Loading...</div>;
  }

  const movieInfo = movies.find(
    (m) => m.title.toLowerCase().replace(/ /g, "-") === movieTitle
  );

  // Check if the movie exists
  if (!movieInfo) {
    return <div>Movie not found!</div>;
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
        <h3 className="movieGenre">Movie Genre Ids: {movieInfo.genre_ids}</h3>
        <p className="movieSummary">{movieInfo.overview}</p>
      </div>
      <Link to="/movies">Back to Movies</Link>
    </>
  );
};
