import { Route } from "react-router-dom";
import { Home } from "../pages/Home"; // Homepage component

export const routes = (
  <>
    {/* Route for the Homepage */}
    <Route path="/" element={<Home />} />
  </>
);
