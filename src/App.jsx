import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MovieList } from './pages/MoviesList'
import { MediaDetails } from './pages/MediaDetails'
import { Sidebar } from './components/Sidebar'
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
        <Route path="/tv/:id/seasons" element={<SeasonList />} />
        <Route
          path="/tv/:id/season/:season_number"
          element={<EpisodesList />}
        />
        {/* Unified routes using `id` for both movies and series */}
        <Route path="/movie/:id" element={<MediaDetails type="movie" />} />
        <Route path="/tv/:id" element={<MediaDetails type="series" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
