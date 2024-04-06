import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MovieList } from './pages/MovieList.jsx'
import { ShowMovie } from './pages/ShowMovie.jsx'

export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movies/:id" element={<ShowMovie/>} />
        </Routes>
      </main>
    </BrowserRouter>

  )
};


