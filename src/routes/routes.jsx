import { Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { MovieDetails } from "../pages/MovieDetails/MovieDetails";

const routes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/movie/:id" element={<MovieDetails />} />
    {/*changed from moviedetail to id as we are using id in the api *Elba */}
  </>
);

export default routes;
