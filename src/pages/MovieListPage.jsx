import { useOutletContext, useParams } from "react-router-dom";
import useFetchMovies from "../hooks/useFetchMovies";
import MovieList from "../components/MovieList";
import { formatCategoryName } from "../utils/formatCategoryName";
import { Typography } from "../components/ui/Typography";

const MovieListPage = () => {
  const { searchQuery } = useOutletContext();
  const { categoryName } = useParams();

  // Convert hyphens to underscores for API usage
  const apiCategory = categoryName
    ? categoryName.replace(/-/g, "_")
    : "top_rated";
  const { movies, loading, error } = useFetchMovies(apiCategory, searchQuery);

  // Format category name for display
  const pageTitle = searchQuery
    ? `Search: "${searchQuery}"`
    : formatCategoryName(apiCategory);

  return (
    <div>
      <Typography element="h1" className="mb-4 lg:mb-8" aria-live="polite">
        {pageTitle}
      </Typography>

      {loading && <Typography element="h2">Loading movies...</Typography>}

      {error && <Typography element="h2">{error}</Typography>}

      {!loading && !error && movies.length === 0 && (
        <Typography element="h2">No movies found.</Typography>
      )}

      {!loading && !error && <MovieList movies={movies} />}
    </div>
  );
};

export default MovieListPage;
