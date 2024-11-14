// routes.jsx

import { Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { MovieInfo } from "../pages/MovieInfo";

export const routes = (
  <>
    <Route path="/movie/:id" element={<MovieInfo />} />
    <Route path="/" element={<Home />} />
  </>
);