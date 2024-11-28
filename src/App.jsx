import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import { MovieList } from "./components/MovieList";
import { MovieCard } from './components/MovieCard';



export const App = () => {


  
  return (
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<MovieList />} />
    <Route path="/movie/:id" element={<MovieCard />} />

    </Routes>
  </BrowserRouter>

  )
};


// The issue is with the URL parameter in the Link component. In your App.js, you should provide the movie.id as the URL parameter, not the string :id. Here's the corrected code:

// jsx
// Copy code
// <Link to={`/movie/${movie.id}`}>
//   <MovieList />
// </Link>
// You should change this line in App.js to properly generate the links for each movie in the MovieList. The corrected Link should include the actual movie.id, which will be used to match the movie_id route parameter in MovieCard.

// Also, in your MovieDetails component, it appears that you are trying to destructure the movie properties incorrectly. You should destructure the properties from the movie object instead of directly trying to destructure from the id. Here's the corrected MovieDetails component:

// jsx
// Copy code
// export const MovieDetails = ({ movie }) => {
//   const { title, backdrop_path, overview } = movie;
//   const backgroundImage = `https://image.tmdb.org/t/p/w342/${backdrop_path}`;

//   return (
//     <div>
//       <img src={backgroundImage} alt={overview} />
//       <h1>{title}</h1>
//       <p>{overview}</p>
//     </div>
//   );
// }
// Make sure to fix the Link in App.js as described above, and the code should work as expected.