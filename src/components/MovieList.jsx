import { Link } from "react-router-dom";
import fallbackPoster from "../assets/images/no-poster-found.jpg";
import { Typography } from "./ui/Typography";

const MovieList = ({ movies }) => {
  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
      {movies.map((movie) => {
        return (
          <div
            key={movie.id}
            className="overflow-hidden rounded-lg bg-white shadow"
          >
            <Link to={`/movie/${movie.id}`}>
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : fallbackPoster
                }
                alt=""
                width="500"
                height="750"
                className="h-auto w-full"
              />
              <div className="p-2">
                <Typography element="h2" styledAs="h3">
                  {movie.title}
                </Typography>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default MovieList;
