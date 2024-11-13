import { Route } from "react-router-dom";
import { Home } from "../pages/Home"; // Homepage component
import { DetailPage } from "../pages/DetailPage"; // Shows details about a particular movie

export const routes = (
  <>
    {/* Route for the Homepage */}
    <Route path="/" element={<Home />} />
    <Route path="/movie/:id" element={<DetailPage />} />
  </>
);
