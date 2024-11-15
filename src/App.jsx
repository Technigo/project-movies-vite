import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieFlex from "./component/MovieFlex";
import MovieDetails from "./component/MovieDetails";

export const App = () => {
  return (
    <>
      <BrowserRouter>   
        <MovieFlex />

        <Routes>
          <Route path="/" element={<MovieFlex />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>

      </BrowserRouter> 
    </>
  )
};
