import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MovieList } from "./pages/MovieList";
import { MovieDetails } from "./pages/MovieDetails";
import { NotFound } from "./pages/NotFound";
import "./App.css";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:movie_id" element={<MovieDetails />} />

        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { MovieList } from "./pages/MovieList";
// import { SeriesList } from "./pages/SeriesList"; // Import SeriesList component
// import { MovieDetails } from "./pages/MovieDetails";
// // import { SeriesDetails } from "./pages/SeriesDetails";
// import { NotFound } from "./pages/NotFound";
// import "./App.css";

// export const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<MovieList />} />
//         <Route path="/movies" element={<MovieList />} />{" "}
//         {/* Add a route for movies */}
//         <Route path="/series" element={<SeriesList />} />{" "}
//         {/* Add a route for series */}
//         <Route path="/movie/:movie_id" element={<MovieDetails />} />
//         {/* <Route path="/series/:series_id" element=<SeriesDetails />} />  */}
//         <Route path="/not-found" element={<NotFound />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };
