import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import { MovieList } from "./components/MovieList";
import { MovieCard } from './components/MovieCard';



export const App = () => {


  
  return (
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<MovieList />} />
    <Route path="/movie/:id" element={<MovieCard />} />

    </Routes>
  </BrowserRouter>

  )
};
