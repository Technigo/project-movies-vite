/**
 * This file defines the application's routes as a list of <Route> components.
 * 
 * Each <Route> specifies a URL path and an element (component) to render when that path is accessed.
 * 
 * Naming convention:
 * The `routes` variable is named in lowercase because it’s a standard variable, not a React component.
 * 
 * This file is saved as .jsx because it contains JSX syntax, indicating that it handles JSX and React components.
 * 
 **/

import { Route } from "react-router-dom";
import Home from "../pages/Home";
import MovieInfo from "../pages/MovieInfo";
import { PageNotFound } from "../pages/PageNotFound";

export const routes = (
  <>
    {/* Route to render the Home page */}
    <Route path="/" element={<Home />} />

    {/* A dynamic route for individual movie pages */}
    {/* The :movieTitle part is a dynamic parameter that will match the movie title in the URL */} 
    <Route path="/movie/:movieId" element={<MovieInfo />} />

    {/* Route with "*" that renders the PageNotFound component for unmatched paths */}
    <Route path="*" element={<PageNotFound />} />
  
  </>
);

export default routes;