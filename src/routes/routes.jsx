import { Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { MoviesList } from "../pages/MoviesList";

export const routes = () => {
  return (
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies" element={<MoviesList />} />
    </>
  );
};
