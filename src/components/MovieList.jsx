import { Link } from "react-router-dom";
import fallbackPoster from "../assets/images/no-poster-found.jpg";

const MovieList = ({ movies }) => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {movies.map((movie) => {
        return (
          <div
            key={movie.id}
            className="overflow-hidden rounded bg-white shadow"
          >
            <Link to={`/movie/${movie.id}`}>
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : fallbackPoster
                }
                alt=""
                className="h-auto w-full"
              />
              <div className="p-2">
                <h2 className="text-lg font-bold">{movie.title}</h2>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default MovieList;
