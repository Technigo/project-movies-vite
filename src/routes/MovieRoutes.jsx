import { Route, Routes } from "react-router-dom";
import { MovieGrid } from "../pages/MovieGrid";
import { MovieDetails } from "../pages/MovieDetails";
import { NotFound } from "../pages/NotFound";
import PropTypes from "prop-types";

export const MovieRoutes = ({ data, setAPI_END, loading, setLoading }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MovieGrid
            data={data}
            setAPI_END={setAPI_END}
            loading={loading}
            setLoading={setLoading}
          />
        }
      />
      <Route
        path="/:genre/:id"
        element={<MovieDetails />}
      />
      <Route
        path="/:genre"
        element={
          <MovieGrid
            data={data}
            setAPI_END={setAPI_END}
            loading={loading}
            setLoading={setLoading}
          />
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

MovieRoutes.propTypes = {
  data: PropTypes.object,
  setAPI_END: PropTypes.any,
  loading: PropTypes.any,
  setLoading: PropTypes.any
};
