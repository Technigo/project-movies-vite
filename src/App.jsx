import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Upcoming } from "./pages/Upcoming";
import { MovieInfo } from "./pages/MovieInfo";
import { GlobalStyles } from "./styles/GlobalStyles";
import { NotFound } from "./pages/NotFound";




export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar />
      <Routes>
        {/* Route for the home page */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/movie/:id" element={<MovieInfo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};




// /src
//   /components
//   /Navbar           // Navbar with home, about and upcoming movies
//   /MovieCard        // Card for displaying movie posters on now playing movies.

//   /pages            // Page-level components
//   /About            // Infopage about the site
//   /Home             // Home page (displays Now Playing, etc.)
//   /Movieinfo        // Component for rendering movie-specific information like title, description, etc incl API fetch.
//   /NotFound         // Displays a custom 404 error page for unmatched routes.
//   /NowPlaying       // Page for Now Playing movies incl API fetch
//   /Upcoming         // Page for Upcoming movies incl API fetch

//   /Styles           // Global styles component

//   /ui
//   - Moviegrid       // Reusable grid for the moviecards
//   - Typography      // Reusable Typography

// /App.jsx            // Main app component with routing