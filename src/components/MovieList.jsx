import { Link } from "react-router-dom";
import { slugify } from "../utils/slugify";
import { Typography } from "./ui/Typography";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import StarIcon from "../assets/icons/star.svg?react";
import fallbackPoster from "../assets/images/no-poster-found.jpg";
import Badge from "./ui/Badge";

const MovieList = ({ movies = [], loading }) => {
  const skeletonCards = Array.from({ length: 20 });

  return (
    <SkeletonTheme baseColor="#272C22" highlightColor="#323C27">
      <div className="grid grid-cols-1 gap-3 xs:grid-cols-2 sm:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4 4xl:grid-cols-6">
        {loading
          ? skeletonCards.map((_, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg bg-white shadow"
              >
                <div className="overflow-hidden">
                  <Skeleton
                    width="500px"
                    className="block aspect-2/3 w-full max-w-full"
                    containerClassName="flex-1"
                  />
                </div>
                <div className="p-4 text-center">
                  <Skeleton
                    width="60%"
                    height="20px"
                    containerClassName="flex-1"
                  />
                  <Skeleton
                    width="40%"
                    height="20px"
                    containerClassName="flex-1"
                    style={{ marginTop: "10px" }}
                  />
                </div>
              </div>
            ))
          : movies.map((movie) => (
              <div
                key={movie.id}
                className="overflow-hidden rounded-lg bg-white shadow"
              >
                <Link
                  to={`/movie/${movie.id}-${slugify(movie.title)}`}
                  className="group"
                  aria-label={movie.title}
                >
                  <div className="overflow-hidden bg-green-800">
                    <img
                      src={
                        movie.poster_path
                          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                          : fallbackPoster
                      }
                      alt=""
                      width="500"
                      height="750"
                      className="aspect-2/3 h-auto w-full transform bg-green-800 transition duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <Typography element="h2" styledAs="h5" className="mb-1">
                      {movie.title}
                    </Typography>
                    {movie.vote_average && (
                      <>
                        <Badge size="small" className="mt-2" aria-hidden="true">
                          <StarIcon
                            width="1.2em"
                            height="1.2em"
                            color="orange"
                          />
                          {movie.vote_average.toFixed(1)} / 10
                        </Badge>
                        <Typography element="p" className="sr-only">
                          {`Rating: ${movie.vote_average.toFixed(1)} out of 10`}
                        </Typography>
                      </>
                    )}
                  </div>
                </Link>
              </div>
            ))}
      </div>
    </SkeletonTheme>
  );
};

export default MovieList;
