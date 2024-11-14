import styled from 'styled-components';
import { MovieList } from '../components/MovieLists';
import { HeaderOne } from '../ui/Typography';
import { CardContainer } from '../ui/CardContainer';

const HomeStyles = styled.div`
  background-color: pink;
  padding: 10px;
`;

export const Home = () => {
  return (
    <>
      <HeaderOne>Movies</HeaderOne>
      <HomeStyles>
        <CardContainer>
          <MovieList />
        </CardContainer>
      </HomeStyles>
    </>
  );
};