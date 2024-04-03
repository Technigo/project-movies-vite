import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import MovieList from "./components/MovieList";
export const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Navigate replace to="now_playing/1" />} />
          <Route path=":type/:pageNum" element={<MovieList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
