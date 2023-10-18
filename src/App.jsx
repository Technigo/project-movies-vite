import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MovieList } from "./pages/MovieList";
import { ShowMeMovie } from "./pages/ShowMeMovie";
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
        {routes}
      </Routes>
    </BrowserRouter>

  )

};
