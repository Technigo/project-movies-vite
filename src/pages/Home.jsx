// import styled from 'styled-components';
// import { MovieCard } from '../components/MovieCard';
// import { useMovies } from '../Hook';
// import { CardContainer } from '../ui/CardContainer';
// import { MainContainer } from '../ui/MainContainer';
// import { HeaderOne } from '../ui/Typography';

// const HomeStyles = styled.div`
// background-color: pink;
// padding: 10px;
// `

// export const Home = () => {
//   const { movies, isLoading, error } = useMovies();
//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <>
//       <HeaderOne>Movies</HeaderOne>
//       <HomeStyles>
//         <MainContainer>
//           <CardContainer>
//             {movies.map((movie) => (
//               <MovieCard key={movie.id} {...movie} />
//             ))}
//           </CardContainer>
//         </MainContainer>
//       </HomeStyles>
//     </>
//   );
// };

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