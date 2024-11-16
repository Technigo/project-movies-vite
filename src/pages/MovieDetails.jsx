import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMovieDetails, fetchMovieCredits } from "../api/tmdb";
import { Typography } from "../components/ui/Typography";
import { slugify } from "../utils/slugify";
import Button from "../components/ui/Button";
import GoBackIcon from "../assets/icons/arrow_back.svg?react";
import noBackDropFound from "../assets/images/no-backdrop-found.png";
import Badge from "../components/ui/Badge";
import BadgeGroup from "../components/ui/BadgeGroup";

const MovieDetails = () => {
  const { idSlug } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);

  // Parse id and slug from idSlug
  const separatorIndex = idSlug.indexOf("-");
  if (separatorIndex === -1) {
    navigate("/not-found", { replace: true });
    return null;
  }

  const id = idSlug.substring(0, separatorIndex);
  const slug = idSlug.substring(separatorIndex + 1);

  const idNumber = parseInt(id, 10);
  if (isNaN(idNumber)) {
    navigate("/not-found", { replace: true });
    return null;
  }

  useEffect(() => {
    const getMovieData = async () => {
      try {
        const [movieData, creditsData] = await Promise.all([
          fetchMovieDetails(id),
          fetchMovieCredits(id),
        ]);

        if (movieData) {
          setMovie(movieData);
          const actualSlug = slugify(movieData.title);

          if (actualSlug !== slug) {
            navigate(`/movie/${id}-${actualSlug}`, { replace: true });
          }
        } else {
          navigate("/not-found");
        }

        if (creditsData) {
          setCredits(creditsData);
        }
      } catch (error) {
        console.error("Error fetching movie data:", error);
        navigate("/not-found");
      }
    };

    getMovieData();
  }, [id, slug, navigate]);

  if (!movie) return <div>Loading movie...</div>;

  const releaseYear = movie.release_date.split("-")[0];

  return (
    <div>
      <Button
        variant="secondary"
        onClick={() => navigate(-1)}
        className="mb-6 lg:mb-12"
      >
        <GoBackIcon /> Go back
      </Button>
      <header className="items grid grid-cols-2 items-center gap-8 md:grid-cols-8 md:gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="col-span-2 md:col-span-4 lg:order-2 lg:col-span-6">
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`
                : noBackDropFound
            }
            alt=""
            className="rounded-lg"
          />
        </div>
        <div className="col-span-2 md:col-span-4 lg:order-1 lg:col-span-6">
          <Typography element="h1" className="mb-4">
            {movie.title} ({releaseYear})
          </Typography>
          <Typography element="p" styledAs="bodyLarge">
            {movie.overview}
          </Typography>
          <BadgeGroup>
            {movie.genres.map((genre) => (
              <Badge key={genre.id}>{genre.name}</Badge>
            ))}
          </BadgeGroup>
        </div>
      </header>
      <section>
        {credits && (
          <div className="mt-8">
            <Typography element="h2" className="mb-4 mt-12">
              Top cast
            </Typography>
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-4">
              {credits.cast.slice(0, 8).map((actor) => (
                <li key={actor.id} className="flex items-center gap-4">
                  <img
                    src={
                      actor.profile_path
                        ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
                        : noBackDropFound
                    }
                    alt=""
                    className="h-auto w-20 rounded"
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
        )}
      </section>
    </div>
  );
};

export default MovieDetails;
