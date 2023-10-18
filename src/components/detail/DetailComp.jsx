import { GrStar } from "react-icons/gr";
import { Back } from "../../icons/Back";

export const DetailComp = ({ movie }) => {
  if (!movie) {
    return <div>Loading...</div>;
  }

  const { original_title, overview, vote_average, poster_path, backdrop_path } =
    movie;

  if (!original_title) {
    return <div>No movie details available.</div>;
  }

  const imageBackground = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w1280${backdrop_path})`,
    backgroundSize: "cover",
    height: "100vh",
  };

  return (
    <article>
      <div className="movie-detail-wrapper" style={imageBackground}>
        <Back />
        {poster_path && (
          <img
            className="girl"
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={original_title}
          />
        )}
        <h2>
          <span className="movie-title">
            {original_title}{" "}
            <span className="stars-rating">
              <GrStar className="star-icon" /> {vote_average.toFixed(1)}
            </span>
          </span>
        </h2>
        <p className="text-overview">{overview}</p>
      </div>
    </article>
  );
};
