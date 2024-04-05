import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MovieList } from "./components/MovieList"
import { MovieDetails } from "./components/MovieDetails"
import { PageNotFound } from "./components/PageNotFound"
import "./App.css"

export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/movies/:slug" element={<MovieDetails />} />
            <Route path="/not-found" element={<PageNotFound />} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  )
}
