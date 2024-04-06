import { Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { MovieDetail } from "../pages/MovieDetail";

const routes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/movie/:title" element={<MovieDetail />}></Route>
  </>
);

export default routes;
