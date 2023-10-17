import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import MovieList from './pages/MovieList'; // Adjust paths as necessary
import MovieDetails from './pages/MovieDetails';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul className="app-ul">
          <li className="app-li">
            <NavLink to="/">Main</NavLink>
          </li>
          <li className="app-li">
            <NavLink to="/movielist">MovieList</NavLink>
          </li>
          <li className="app-li">
            <NavLink to="/moviedetails/:id">MovieDetails</NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<div>Main Content Here</div>} />  
          <Route path="/movielist" element={<MovieList />} />
          <Route path="/moviedetails/:id" element={<MovieDetails />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
