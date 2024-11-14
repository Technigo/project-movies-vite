import { BrowserRouter } from "react-router-dom";
import { MovieCatalog } from "./components/MovieCatalog";
import { MovieInfo } from "./components/MovieInfo";

export const App = () => {
  return (

    <>
      <BrowserRouter>


        <MovieCatalog />
        <MovieInfo />


      </BrowserRouter>



    </>





  );




};