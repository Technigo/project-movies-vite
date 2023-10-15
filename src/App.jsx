import { BrowserRouter, Routes, Route } from "react-router-dom";
import PopularList from "./components/PopularList";
import SingleMovie from "./components/SingleMovie";
// import { Link } from "react-router-dom";
export const App = () => {
  return (
    <BrowserRouter>
      {/* <nav>
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/Movie"> Movie</Link>
          </li>
        </ul>
      </nav> */}
      <Routes>
        <Route path="/" element={<PopularList />} />
        <Route path="/movies/:id" element={<SingleMovie />} />
      </Routes>
    </BrowserRouter>
  );
};
