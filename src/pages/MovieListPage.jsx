import { useMemo, useState, useEffect } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import useFetchMovies from "../hooks/useFetchMovies";
import { Typography } from "../components/ui/Typography";
import MovieList from "../components/MovieList";
import PageTitle from "../components/PageTitle";
import Pagination from "../components/Pagination";
import { formatCategoryName } from "../utils/formatCategoryName";

const MovieListPage = () => {
  const { searchQuery } = useOutletContext();
  const { categoryName, pageNumber } = useParams();
  const navigate = useNavigate();

  // Convert hyphens to underscores for API usage
  const apiCategory = useMemo(() => {
    return categoryName ? categoryName.replace(/-/g, "_") : "top_rated";
  }, [categoryName]);

  const stableSearchQuery = searchQuery || "";

  // Parse and sanitize the page number from the URL
  const initialPage = pageNumber ? parseInt(pageNumber, 10) : 1;
  const sanitizedPage = isNaN(initialPage) || initialPage < 1 ? 1 : initialPage;

  const [currentPage, setCurrentPage] = useState(sanitizedPage);

  // Update currentPage when URL parameter changes
  useEffect(() => {
    setCurrentPage(sanitizedPage);
  }, [sanitizedPage]);

  const { movies, totalPages, loading, error } = useFetchMovies(
    apiCategory,
    stableSearchQuery,
    currentPage,
  );

  // Format category name for display
  const pageTitle = searchQuery
    ? `Search: "${searchQuery}"`
    : formatCategoryName(apiCategory);

  // Handle page change and update the URL
  const handlePageChange = (newPage) => {
    // Update the URL to reflect the new page
    if (categoryName) {
      navigate(`/movies/${categoryName}/${newPage}`);
    } else {
      navigate(`/page/${newPage}`);
    }
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
