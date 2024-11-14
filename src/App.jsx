import { BrowserRouter } from "react-router-dom";
import { MovieList } from './components/MovieList';
import { MovieDetails } from "./components/MovieDetails";


export const App = () => {
  return (


    <>


      <BrowserRouter>

        <MovieList />
        {/* <MovieDetails /> */}

      </BrowserRouter>


    </>

  )
};
