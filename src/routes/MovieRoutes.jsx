import { Route, Routes } from "react-router-dom";
import { MovieGrid } from "../pages/MovieGrid";
import { MovieDetails } from "../pages/MovieDetails";
import { NotFound } from "../pages/NotFound";
import PropTypes from "prop-types";

export const MovieRoutes = ({ data }) => {
  console.log("Routes data: ", data);

  return (
    <Routes>
      <Route path="/" element={<MovieGrid data={data} />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/movie/:slug" element={<MovieDetails data={data} />} />
    </Routes>
  );
};

MovieRoutes.propTypes = {
  data: PropTypes.object,
};