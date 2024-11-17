import { useMemo, useState, useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import useFetchMovies from "../hooks/useFetchMovies";
import { Typography } from "../components/ui/Typography";
import MovieList from "../components/MovieList";
import PageTitle from "../components/PageTitle";
import Pagination from "../components/Pagination";
import { formatCategoryName } from "../utils/formatCategoryName";

const MovieListPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { searchQuery } = useOutletContext();
  const { categoryName } = useParams();

  // Convert hyphens to underscores for API usage
  const apiCategory = useMemo(() => {
    return categoryName ? categoryName.replace(/-/g, "_") : "top_rated";
  }, [categoryName]);

  const stableSearchQuery = searchQuery || "";

  const { movies, totalPages, loading, error } = useFetchMovies(
    apiCategory,
    stableSearchQuery,
    currentPage,
  );

  // Format category name for display
  const pageTitle = searchQuery
    ? `Search: "${searchQuery}"`
    : formatCategoryName(apiCategory);

  // Reset currentPage when category or searchQuery changes
  useEffect(() => {
    setCurrentPage(1);
  }, [apiCategory, stableSearchQuery]);

  // Handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

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

      {/* Pagination Controls */}
      {!loading && !error && totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default MovieListPage;
