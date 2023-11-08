import { MovieInfo } from "../MovieInfo";
import { CTAButton } from "../CTAButton/CTAButton";

const imageUrl = `https://image.tmdb.org/t/p/`;
const imageBig = "original";
const imageSmall = "w300";

export const MovieCard = ({ movie }) => {
  const fullImageUrl = imageUrl + imageSmall + movie.poster_path;
  const btnTarget = "movieDetail";
  return (
    <div className="movieCard">
      <img src={fullImageUrl} />
      <MovieInfo title={movie.title} date={movie.release_date} />
      <CTAButton btnTarget={btnTarget} movie={movie} />
    </div>
  );
};
