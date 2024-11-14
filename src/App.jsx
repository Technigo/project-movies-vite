import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieFlex from "./component/MovieFlex";

export const App = () => {
  return (
    <>
      <BrowserRouter>   
        <MovieFlex />

        <Routes>
          <Route path="/" element={<MovieFlex />} />
        </Routes>

      </BrowserRouter> 
    </>
  )
};
