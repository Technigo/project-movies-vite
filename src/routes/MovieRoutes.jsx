import { Route, Routes, useLocation } from "react-router-dom";
import { MovieGrid } from "../pages/MovieGrid";
import { MovieDetails } from "../pages/MovieDetails";
import { NotFound } from "../pages/NotFound";
import PropTypes from "prop-types";

export const MovieRoutes = ({ data, setAPI_END, loading, setLoading }) => {
  const check = useLocation();

  console.log("App Location: ", check.pathname);

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
        path="/:genre/:slug/:id"
        element={<MovieDetails data={data} setAPI_END={setAPI_END} />}
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

      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

MovieRoutes.propTypes = {
  data: PropTypes.object,
  setAPI_END: PropTypes.any,
  loading: PropTypes.any,
  setLoading: PropTypes.any
};
