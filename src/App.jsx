import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MovieList } from "./components/MovieList"
import { ShowMeMovie } from "./components/ShowMeMovie";
export const App = () => {

  return (
    <BrowserRouter>
      {/* <nav>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/movielist">Movielist</Link>
        </ul>
      </nav> */}
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie:id" element={<ShowMeMovie />} />
      </Routes>
    </BrowserRouter>

  )

};
