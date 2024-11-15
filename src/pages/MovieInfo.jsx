import { useParams, Link } from "react-router-dom";
import { MovieDetails } from "../components/MovieDetails";
import { useMovies } from "../Hook";

export const MovieInfo = () => {
    const { movies, isLoading, error } = useMovies();
    const { id } = useParams();
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    const movie = movies.find((movie) => movie.id === parseInt(id))
    if (!movie) return <p>Film not found</p>;
    return (
        <>
            <Link to="/">Back</Link>
            <MovieDetails movie={movie} />
        </>
    );
};