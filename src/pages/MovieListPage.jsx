import { useState, useEffect } from "react";
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
  const searchTerm = (queryParams.get("q") || "").trim();

  // Convert hyphens to underscores for API usage
  const apiCategory = categoryName
    ? categoryName.replace(/-/g, "_")
    : "top_rated";

  // Parse and sanitize the page number from the URL
  const initialPage = pageNumber ? parseInt(pageNumber, 10) : 1;
  const sanitizedPage = isNaN(initialPage) || initialPage < 1 ? 1 : initialPage;

  // State for current page
  const [currentPage, setCurrentPage] = useState(sanitizedPage);

  // Update currentPage when URL parameter changes
  useEffect(() => {
    setCurrentPage(sanitizedPage);
  }, [sanitizedPage]);

  const { movies, totalPages, loading, error } = useFetchMovies(
    apiCategory,
    searchTerm,
    currentPage,
  );

  // Page title
  const pageTitle = searchTerm
    ? `Search: "${searchTerm}"`
    : formatCategoryName(apiCategory);

  // Handle page change and update the URL
  const handlePageChange = (newPage) => {
    const params = new URLSearchParams();

    // Ensure query params are correctly set if there is a search term
    if (searchTerm) {
      params.set("q", searchTerm);
    }

    let newPath;

    // Home page (top rated movies)
    if (!categoryName) {
      newPath = newPage > 1 ? `/page/${newPage}` : `/`; // Home without category defaults to page 1
    } else {
      // Movies with category (e.g., top-rated, popular)
      newPath = `/movies/${categoryName}`;
      if (newPage > 1) {
        newPath += `/${newPage}`;
      }
    }

    // Append search parameters if present
    const search = params.toString() ? `?${params.toString()}` : "";

    navigate({
      pathname: newPath,
      search: search,
    });
  };

  return (
    <div>
      <PageTitle
        title={
          categoryName
            ? `${pageTitle} – MovieHut`
            : "MovieHut — Your movie shelter"
        }
      />
      <Typography element="h1" className="mb-4 lg:mb-8" aria-live="polite">
        {pageTitle}
      </Typography>

      {/* Errors during the request */}
      {error && (
        <Typography element="p" role="alert">
          {error}
        </Typography>
      )}

      {/* No movies found, for when you search for instance */}
      {!loading && !error && movies.length === 0 && (
        <Typography element="p">No movies found.</Typography>
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
