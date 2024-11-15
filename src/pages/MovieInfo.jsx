import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { MovieDetails } from "../components/MovieDetails";
import { useMovies } from "../Hook";

const MovieInfoStyles = styled.div`
display: flex;
flex-direction: column;
  background-color: #1e1e1e;
  width: 100%;
`;
export const MovieInfo = () => {
    const { movies, isLoading, error } = useMovies();
    const { id } = useParams();
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    const movie = movies.find((movie) => movie.id === parseInt(id))
    if (!movie) return <p>Film not found</p>;
    return (
        <>
            <MovieInfoStyles>
                <Link to="/">Back</Link>
                <MovieDetails movie={movie} />
            </MovieInfoStyles>
        </>
    );
};