// Route Component: The component maps a URL path to a specific component to render.
// import { BrowserRouter as Router, Route} from "react-router-dom"
import { Route } from "react-router-dom"
import { MovieList } from "./movielist/movielist"
import { MovieDetails } from "./moviedetails/moviedetails"

// Define  routes for the movie-page using React Router. 

const routes = (
  
  // <Router>
   
  <>
    <Route path="/" element={<MovieList />} /> {/*// Render the MovieList component when the URL path is "/"*/}
    <Route path="/:movie/:id" element={<MovieDetails />} />{/*// Render the MovieDetail component when the URL path is "id"*/}
    </>
  
  // </Router>
)

export default routes


