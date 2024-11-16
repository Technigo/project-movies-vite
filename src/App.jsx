import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MovieList } from "./pages/MovieList";
import { MovieCard } from "./pages/MovieCard";
import { PageNotFound } from "./pages/PageNotFound";

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const NoHeaderLayout = () => { 
  return <Outlet />;
 }

export const App = () => {
  return (
    <Router>
      <Routes>
        {/* Routes with Header */}
        <Route element={<DefaultLayout />}>
          <Route
            path="/"
            element={<MovieList movieCategory="now_playing" />}
          />
          <Route
            path="/popular"
            element={<MovieList movieCategory="popular" />}
          />
          <Route
            path="/top-rated"
            element={<MovieList movieCategory="top_rated" />}
          />
          <Route
            path="/upcoming"
            element={<MovieList movieCategory="upcoming" />}
          />
        </Route>

        {/* Routes without Header */}
        <Route element={<NoHeaderLayout />}>
          <Route path="/movie/:id" element={<MovieCard />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};


