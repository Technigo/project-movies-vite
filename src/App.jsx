import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from "./components/Header/Header"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Upcoming } from "./pages/Upcoming"
import { GlobalStyles } from "./styles/GlobalStyles"




export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Routes>
        {/* Route for the home page */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/upcoming" element={<Upcoming />} />
      </Routes>
    </BrowserRouter>
  );
};








// https://api.themoviedb.org/3/movie/now_playing?api_key=e8d18651c3b4472854ab7f4e7befa4b1&region=SE   API now playing in Sweden
// https://api.themoviedb.org/3/movie/now_playing?api_key=e8d18651c3b4472854ab7f4e7befa4b1&region=SE&page=1
// https://api.themoviedb.org/3/movie/popular?api_key=e8d18651c3b4472854ab7f4e7befa4b1&region=SE API most popular in Sweden
// https://api.themoviedb.org/3/movie/upcoming?api_key=e8d18651c3b4472854ab7f4e7befa4b1&language=en-SE&region=SE&page=1 Upcoming movies in Sweden
// https://api.themoviedb.org/3/movie/popular?api_key=e8d18651c3b4472854ab7f4e7befa4b1&language=en-US&page=1
// https://api.themoviedb.org/3/movie/now_playing?api_key=e8d18651c3b4472854ab7f4e7befa4b1&language=en-SE&page=1&region=SE API now playing in Sweden



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