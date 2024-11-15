import styled from "styled-components";
import { MovieList } from "../components/MovieLists";
import { HeaderOne } from "../ui/Typography";
import { CardContainer } from "../ui/CardContainer";

const HomeStyles = styled.div`
  background-color: #1e1e1e;
  padding: 10px;
  max-width: 100%;
`;

export const Home = () => {
  return (
    <>
      <HomeStyles>
        <HeaderOne>Movies</HeaderOne>
        <CardContainer>
          <MovieList />
        </CardContainer>
      </HomeStyles>
    </>
  );
};