import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieList from './pages/MovieList'; // Adjust paths as necessary
import MovieDetails from './pages/MovieDetails';

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
        <Route path="/" element={<MovieList />} />
          <Route path="/movielist" element={<MovieList />} />
          <Route path="/moviedetails/:id" element={<MovieDetails />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
