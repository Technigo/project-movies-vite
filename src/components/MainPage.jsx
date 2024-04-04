import { BrowserRouter } from "react-router-dom";
import { RouteList } from "./RouteList";
import { useState, useEffect } from "react";
import { NavBar } from "./NavBar";

export const MainPage = () => {
  
  const [movies, setMovies] = useState(null);
  const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=555122904f9aa5a9df5e76f87cb061f7&language=en-US&page=1";

  const fetchMovies = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error("Error fetching movies", error));
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <RouteList movies={movies} />
      </main>
    </BrowserRouter>
  )
}
