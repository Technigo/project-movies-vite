import React from "react";
import { Movies } from "./Movies";
// import { MovieCard } from "./components/MovieCard";
import { MovieDetails } from "./components/MovieDetails";

const App = () => {
  return (
    <>
      <Movies />
      {/* <MovieCard /> */}
      <MovieDetails />
    </>
  );
};

export default App;
