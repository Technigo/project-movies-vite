import { Route } from "react-router-dom";
import { Movies } from "../components/Movies";
// import { MovieDetails } from "../components/MovieDetails";
import { ErrorPage } from "../components/ErrorPage";

export const routes = (
  <>
    {/* <Route path="/movie/:id" element={<MovieDetails />} /> */}
    <Route path="/movies" element={<Movies />} />
    <Route path="*" element={<ErrorPage />} />
  </>
);
