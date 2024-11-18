import { useMemo, useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import useFetchMovies from "../hooks/useFetchMovies";
import { Typography } from "../components/ui/Typography";
import MovieList from "../components/MovieList";
import PageTitle from "../components/PageTitle";
import Pagination from "../components/Pagination";
import { formatCategoryName } from "../utils/formatCategoryName";

const MovieListPage = () => {
  const { categoryName, pageNumber } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // Extract query params
  const queryParams = new URLSearchParams(location.search);
  const q = queryParams.get("q") || "";
  const searchTerm = q.trim();

  // Update searchQuery from query params
  const stableSearchQuery = searchTerm || "";

  // Convert hyphens to underscores for API usage
  const apiCategory = useMemo(() => {
    return categoryName ? categoryName.replace(/-/g, "_") : "top_rated";
  }, [categoryName]);

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
  const pageTitle = stableSearchQuery
    ? `Search: "${stableSearchQuery}"`
    : formatCategoryName(apiCategory);

  // Handle page change and update the URL
  const handlePageChange = (newPage) => {
    // Prepare query parameters
    const params = new URLSearchParams();

    if (stableSearchQuery) {
      params.set("q", stableSearchQuery);
    }

    // Determine the new pathname based on category and page number
    let newPath = "/";
    if (categoryName) {
      newPath = `/movies/${categoryName}`;
      if (newPage > 1) {
        newPath += `/${newPage}`;
      }
    } else {
      if (newPage > 1) {
        newPath = `/page/${newPage}`;
      }
    }

    // Append query parameters if present
    const search = params.toString() ? `?${params.toString()}` : "";

    navigate({
      pathname: newPath,
      search: search,
    });
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
