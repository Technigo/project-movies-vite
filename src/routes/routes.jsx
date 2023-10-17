import { Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { MovieDetails } from "../pages/MovieDetails";

const routes = (
  <>
    <Route path="/" element={<Home />} />

    <Route path="/movie/:movieDetail" element={<MovieDetails />}></Route>
  </>
);

export default routes;
