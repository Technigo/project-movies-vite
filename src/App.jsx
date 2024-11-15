import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Upcoming } from "./pages/Upcoming"
import { MovieInfo } from "./pages/MovieInfo";
import { GlobalStyles } from "./styles/GlobalStyles"




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
      </Routes>
    </BrowserRouter>
  );
};




// /src
//   /components
//    /Header          //Header folder with navbar for Home, Upcoming Movies,
//    -Header
//    -Navbar
//   /MovieCard        // Card for displaying movie info
//   /MoviePoster      // Component for displaying movie posters
//   /MovieInfo        // Component for rendering movie-specific information like title, description, etc.
// /pages              // Page-level components, mapped to routes
//   /Home             // Home page (displays Now Playing, etc.)
//   /NowPlaying       // Page for Now Playing movies
//   /Upcoming         // Page for Upcoming movies
//   /MovieDetail      // Page for displaying details of a single movie
// /App.jsx             // Main app component with routing