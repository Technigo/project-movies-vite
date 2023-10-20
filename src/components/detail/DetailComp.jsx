import { GrStar } from "react-icons/gr";
import { Back } from "../../Back/Back";

export const DetailComp = ({ movie }) => {
  if (!movie) {
    return <div>Loading...</div>;
  }

  const { original_title, overview, vote_average, poster_path, backdrop_path } =
    movie;

  if (!original_title) {
    return <div>No movie details available.</div>;
  }

  // Define the background image for the movie detail page.
  const imageBackground = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url(https://image.tmdb.org/t/p/w1280${backdrop_path})`,
  };

  return (
    <article className="movie-detail-wrapper">
      <Back />
      {movie && (
        <div className="background-image" style={imageBackground}>
          <div className="movie-info">
            <img
              className="movie-poster"
              src={`https://image.tmdb.org/t/p/w342${poster_path}`}
              alt={original_title}
            />
            <div className="movie-details">
              <h1>
                <span className="movie-title">{original_title} </span>
                <span className="stars-rating">
                  <GrStar className="star-icon" /> {vote_average.toFixed(1)}
                </span>
              </h1>
              <p className="text-overview">{overview}</p>
            </div>
          </div>
        </div>
      )}
    </article>
  );
};
