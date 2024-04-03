import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MovieList } from "./components/MovieList"
import { MovieDetails } from "./components/MovieDetails"
import "./App.css"

export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/movies/:slug" element={<MovieDetails />} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  )
}
