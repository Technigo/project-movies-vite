import { useOutletContext, useParams } from "react-router-dom";
import useFetchMovies from "../hooks/useFetchMovies";
import MovieList from "../components/MovieList";
import { formatCategoryName } from "../utils/formatCategoryName";
import { Typography } from "../components/ui/Typography";

const HomePage = () => {
  const { searchQuery } = useOutletContext();
  const { categoryName } = useParams();

  const category = categoryName || "top_rated";
  const { movies, loading, error } = useFetchMovies(category, searchQuery);

  const pageTitle = searchQuery
    ? `Search: "${searchQuery}"`
    : formatCategoryName(category);

  return (
    <div>
      <Typography element="h1" className="mb-4">
        {pageTitle}
      </Typography>

      {loading && <Typography element="h2">Loading movies...</Typography>}

      {error && <div className="text-red-500">{error}</div>}

      {!loading && !error && movies.length === 0 && (
        <Typography element="h2">No movies found.</Typography>
      )}

      {!loading && !error && <MovieList movies={movies} />}
    </div>
  );
};

export default HomePage;
