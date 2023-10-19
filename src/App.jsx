// Importing necessary components from 'react-router-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Importing page components
import Movies from "./pages/Movies/Movies";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import { Loading } from "./components/Loading"; // Import your Loading component
import { useEffect, useState } from "react"; // Hooks for managing state and side effects

// Creating the main App component
export const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate a loading delay for demonstration purposes
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate a 2-second loading delay
  }, []);

  if (isLoading) {
    return <Loading />; // Display the Loading component while loading
  }

  return (
    <div>
      {/* Wrapping the application with BrowserRouter to enable routing */}
      <BrowserRouter>
        {/* Defining the routes of the application */}
        <Routes>
          {/* Route for the Movies page */}
          <Route path="/" element={<Movies />} />
          {/* Route for individual movie details */}
          <Route path="/movies/:movieId" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
