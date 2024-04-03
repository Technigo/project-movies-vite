import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PopularList from "./components/PopularList";
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
          <Route index element={<PopularList />} />
          <Route path=":type/:pageNum" element={<PopularList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
