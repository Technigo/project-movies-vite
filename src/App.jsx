import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import MovieDetail from "./pages/MovieDetail"
import { MovieProvider } from "./components/MovieContext"
import LikedMoviesPage from "./pages/LikedMoviesPage"
import SignUp from "./components/SignUp"
import Login from "./components/Login"

export const App = () => {
  return (
    <MovieProvider>
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies/:id" element={<MovieDetail />} />
            <Route path="/liked-movies" element={<LikedMoviesPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </Router>
    </MovieProvider>
  )
}
