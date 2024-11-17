import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Typography } from "../components/ui/Typography";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import BadgeGroup from "../components/ui/BadgeGroup";
import PageTitle from "../components/PageTitle";
import GoBackIcon from "../assets/icons/arrow_back.svg?react";
import StarIcon from "../assets/icons/star.svg?react";
import noBackDropFound from "../assets/images/no-backdrop-found.png";
import useFetchMovieDetails from "../hooks/useFetchMovieDetails";

const MovieDetails = () => {
  const { idSlug } = useParams();
  const navigate = useNavigate();

  const { movie, credits, loading, error } = useFetchMovieDetails(idSlug);

  useEffect(() => {
    if (error) {
      navigate("/not-found", { replace: true });
      return;
    }
  }, [error]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  useEffect(() => {
    // Scroll to the top when the MovieDetails component mounts
    window.scrollTo(0, 0);
  }, []);

  const releaseYear = movie ? movie.release_date.split("-")[0] : "";

  return (
    <SkeletonTheme baseColor="#272C22" highlightColor="#323C27">
      <PageTitle
        title={`${
          movie ? `${movie.title} (${releaseYear})` : "Loading..."
        } – MovieHut`}
      />
      <Button
        variant="secondary"
        onClick={() => navigate(-1)}
        className="mb-6 lg:mb-12"
      >
        <GoBackIcon /> Go back
      </Button>
      <header className="grid grid-cols-2 items-center gap-8 md:grid-cols-8 md:gap-10 lg:grid-cols-12 lg:gap-14">
        {loading ? (
          <div className="col-span-2 md:col-span-4 lg:col-span-12 xl:order-2 xl:col-span-6">
            <Skeleton height={400} className="rounded-lg" />
          </div>
        ) : (
          movie.backdrop_path && (
            <div className="col-span-2 md:col-span-4 lg:col-span-12 xl:order-2 xl:col-span-6">
              <img
                src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
                alt={movie.title}
                className="rounded-lg"
              />
            </div>
          )
        )}
        {/* Details Section */}
        <div className="col-span-2 md:col-span-4 lg:col-span-12 xl:order-1 xl:col-span-6">
          {loading ? (
            <>
              <Skeleton width={80} height={30} className="mb-8" />
              <Skeleton width={`70%`} height={40} className="mb-4" />
              <Skeleton count={3} />
              <div className="mt-8 flex flex-wrap gap-2">
                {Array(3)
                  .fill()
                  .map((_, index) => (
                    <Skeleton key={index} width={80} height={30} />
                  ))}
              </div>
            </>
          ) : (
            <>
              <Badge variant="secondary" size="large" className="mb-8">
                <StarIcon width="1.2em" height="1.2em" color="orange" />
                {movie.vote_average.toFixed(1)} / 10
              </Badge>
              <Typography element="h1" className="mb-4">
                {movie.title} ({releaseYear})
              </Typography>
              <Typography element="p" styledAs="bodyLarge">
                {movie.overview}
              </Typography>
              <BadgeGroup className="mt-8">
                {movie.genres.map((genre) => (
                  <Badge variant="outline" key={genre.id}>
                    {genre.name}
                  </Badge>
                ))}
              </BadgeGroup>
            </>
          )}
        </div>
      </header>
      {/* Cast Section */}
      <section>
        {loading ? (
          <div className="mt-8">
            <Skeleton width={150} height={30} className="mb-4 mt-12" />
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-4">
              {Array(4)
                .fill()
                .map((_, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <Skeleton width={80} height={120} className="rounded" />
                    <div>
                      <Skeleton width={100} height={20} />
                      <Skeleton width={80} height={15} />
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        ) : (
          credits && (
            <div className="mt-8">
              <Typography element="h2" className="mb-4 mt-12">
                Top cast
              </Typography>
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                {credits.cast.slice(0, 8).map((actor) => (
                  <li key={actor.id} className="flex items-center gap-4">
                    <img
                      src={
                        actor.profile_path
                          ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
                          : noBackDropFound
                      }
                      alt={actor.name}
                      className="aspect-2/3 h-auto w-20 rounded bg-green-900"
                    />
                    <div>
                      <Typography element="h3" styledAs="h5">
                        {actor.name}
                      </Typography>
                      <Typography element="p">{actor.character}</Typography>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )
        )}
      </section>
    </SkeletonTheme>
  );
};

export default MovieDetails;
