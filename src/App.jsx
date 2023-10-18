// Importing necessary components from 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Importing page components
import Movies from './pages/Movies/Movies';
import MovieDetails from './pages/MovieDetails/MovieDetails';

// Creating the main App component
export const App = () => {
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
