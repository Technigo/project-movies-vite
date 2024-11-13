import styled from 'styled-components';
import { MovieCard } from '../components/MovieCard';
import { useMovies } from '../Hook';
import { CardContainer } from '../ui/CardContainer';
import { MainContainer } from '../ui/MainContainer';
import { HeaderOne } from '../ui/Typography';

const HomeStyles = styled.div`
background-color: black;
padding: 10px;
`

export const Home = () => {
  const { movies, isLoading, error } = useMovies();
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <HomeStyles>
        <HeaderOne>Movies</HeaderOne>
        <MainContainer>
          <CardContainer>
            {movies.map((movie) => (
              <MovieCard key={movie.id} {...movie} />
            ))}
          </CardContainer>
        </MainContainer>
      </HomeStyles>
    </>
  );
};