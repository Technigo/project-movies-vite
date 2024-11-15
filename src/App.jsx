import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MovieList } from './Components/MovieList';
import { MoviePage } from './Components/MoviePage';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movies/:movieId" element={<MoviePage />} />
      </Routes>
    </Router>
  );
};
