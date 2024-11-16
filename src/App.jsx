import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieList from "./Components/MovieList";
import { DisplayMovie } from "./Components/DisplayMovie";
import NotFound from "./Components/NotFound"; // New component for 404 page

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movies/:id" element={<DisplayMovie />} />
          <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};


/* Q, why is this message appearing? => hook.js:608 ⚠️ React Router Future Flag Warning: React Router will begin wrapping state updates in `React.startTransition` in v7. You can use the `v7_startTransition` future flag to opt-in early. For more information, see https://reactrouter.com/v6/upgrading/future#v7_starttransition. Error Component Stack
    at BrowserRouter (react-router-dom.js?v=85d4a271:5245:5)
    at div (<anonymous>)
    at App (<anonymous>)
*/