import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MoviesList from "./components/MoviesList";
import MovieDetail from "./components/MovieDetail";

function App() {
  const API_KEY = "83bb1ee925f72ad2658686f869cc1de0";
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MoviesList apiKey={API_KEY} />} />

        <Route path="/movies/:id" element={<MovieDetail apiKey={API_KEY} />} />
      </Routes>
    </Router>
  );
}

export default App;
