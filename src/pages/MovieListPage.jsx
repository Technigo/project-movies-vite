import { useMemo } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import useFetchMovies from "../hooks/useFetchMovies";
import { Typography } from "../components/ui/Typography";
import MovieList from "../components/MovieList";
import PageTitle from "../components/PageTitle";
import { formatCategoryName } from "../utils/formatCategoryName";

const MovieListPage = () => {
  const { searchQuery } = useOutletContext();
  const { categoryName } = useParams();

  // Convert hyphens to underscores for API usage
  const apiCategory = useMemo(() => {
    return categoryName ? categoryName.replace(/-/g, "_") : "top_rated";
  }, [categoryName]);

  const stableSearchQuery = searchQuery || "";

  const { movies, loading, error } = useFetchMovies(
    apiCategory,
    stableSearchQuery,
  );

  // Format category name for display
  const pageTitle = searchQuery
    ? `Search: "${searchQuery}"`
    : formatCategoryName(apiCategory);

  return (
    <div>
      <PageTitle title={`${pageTitle} – MovieHut`} />
      <Typography element="h1" className="mb-4 lg:mb-8" aria-live="polite">
        {pageTitle}
      </Typography>

      {error && <Typography element="h2">{error}</Typography>}

      {!loading && !error && movies.length === 0 && (
        <Typography element="h2">No movies found.</Typography>
      )}

      <MovieList movies={movies} loading={loading} />
    </div>
  );
};

export default MovieListPage;
