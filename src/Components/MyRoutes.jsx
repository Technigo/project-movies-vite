import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { MovieDetails } from "./MovieDetails"



export const MyRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/movie-details/:movieId" element={<MovieDetails />}/>
    </Routes>
  )
}
