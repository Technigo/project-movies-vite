import { useParams } from "react-router-dom";

export const MovieDetails = ({ movies }) => {
  const { movieTitle } = useParams();

  const movieInfo = movies.find(
    (m) => m.title.toLowerCase().replace(/ /g, "-") === movieTitle
  );

  console.log(movieInfo);
  if (!movieInfo) {
    return <div>Movie not found!</div>;
  }
  return (
    <div className="detailsContainer">
      <img
        src={`https://image.tmdb.org/t/p/w300${movieInfo.backdrop_path}`}
        alt={`${movieInfo.title} poster`}
      />
      <h2 className="movieTitle">{movieInfo.title}</h2>
      <h2 className="movieRating">{movieInfo.vote_average}</h2>
      <h3 className="movieGenre">Movie Genre Ids: {movieInfo.genre_ids}</h3>
      <p className="movieSummary">{movieInfo.overview}</p>
    </div>
  );
};
