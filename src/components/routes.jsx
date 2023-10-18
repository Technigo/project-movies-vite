// Route Component: The component maps a URL path to a specific component to render.

import { Route } from "react-router-dom"
import { MovieList } from "./movielist/movielist"
import { MovieDetails } from "./moviedetails/moviedetails"

// Define  routes for the movie-page using React Router. 

const routes = (
  <>
    <Route path="/" element={<MovieList />} /> {/*// Render the MovieList component when the URL path is "/"*/}

    {/*<Route path="" element={<MovieDetails />} />*/}
  </>
)

export default routes


