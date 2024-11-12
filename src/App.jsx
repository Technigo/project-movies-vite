import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MovieInfo from './pages/MovieInfo';

export const App = () => {
  return (
    <div className="app-container">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home imageBaseUrl="https://image.tmdb.org/t/p/" />} />
            <Route path="/movie/:movieTitle" element={<MovieInfo imageBaseUrl="https://image.tmdb.org/t/p/" />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
