import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { MovieList } from './pages/MoviesList'
import { MoviesDetails } from './pages/MoviesDetails'
import { TopRatedMovies } from './pages/TopRatedMovies'

export const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:movie_id" element={<MoviesDetails />} />
        <Route path="/movie/top-rated" element={<TopRatedMovies />} />
      </Routes>
    </BrowserRouter>
  )
}
