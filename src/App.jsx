import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MovieList } from './pages/MoviesList'
import { MoviesDetails } from './pages/MoviesDetails'
import { Sidebar } from './components/Sidebar'
import { SeriesDetails } from './pages/SeriesDetails'
import { SeasonList } from './pages/SeasonList'
import { EpisodesList } from './pages/EpisodesList'
import { NotFoundPage } from './pages/NotFoundPage'

export const App = () => {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/top-rated" element={<MovieList />} />
        <Route path="/tv/popular" element={<MovieList />} />
        <Route path="/tv/:series_id/seasons" element={<SeasonList />} />
        <Route
          path="/tv/:series_id/season/:season_number"
          element={<EpisodesList />}
        />
        <Route path="/movie/:movie_id" element={<MoviesDetails />} />
        <Route path="/tv/:series_id" element={<SeriesDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
