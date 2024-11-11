import { useOutletContext, useParams } from "react-router-dom";
import useFetchMovies from "../hooks/useFetchMovies";
import MovieList from "../components/MovieList";
import { formatCategoryName } from "../utils/formatCategoryName";

const HomePage = () => {
  const { searchQuery } = useOutletContext();
  const { categoryName } = useParams();

  const category = categoryName || "popular";
  const { movies, loading, error } = useFetchMovies(category, searchQuery);

  const pageTitle = searchQuery
    ? `Search: "${searchQuery}"`
    : formatCategoryName(category);

  return (
    <div>
      <h1 className="mb-4 text-3xl font-bold">{pageTitle}</h1>

      {loading && <h1>Loading movies...</h1>}

      {error && <div className="text-red-500">{error}</div>}

      {!loading && !error && movies.length === 0 && <div>No movies found.</div>}

      {!loading && !error && <MovieList movies={movies} />}
    </div>
  );
};

export default HomePage;
