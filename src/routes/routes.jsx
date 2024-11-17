import { Route } from "react-router-dom";
import { Home } from "../pages/Home"; // Homepage component
import { DetailPage } from "../pages/DetailPage"; // Shows details about a particular movie
import { ErrorPage } from "../pages/ErrorPage"; // Shows an error message for invalid movie

export const routes = (
  <>
    {/* Route for the Homepage */}
    <Route path="/" element={<Home />} />

    {/* Route for Detailed movie page */}
    <Route path="/movie/:id" element={<DetailPage />} />

    {/* Wildcard route for handling 404 errors or unpatched paths */}
    <Route path="*" element={<ErrorPage />} />

    {/* Explicitly handles invalid movie IDs */}
    <Route path="/not-found" element={<ErrorPage />} />
  </>
);
