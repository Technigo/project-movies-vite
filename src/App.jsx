import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'
import MovieList from '/src/pages/MovieList'; // Replace 'path_to_MovieList' with the actual path
import MovieDetails from '/src//pages/MovieDetails';



function App() {
  return (
    <>
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
            <Route path="/" element={<div>Main Content Here</div>} />  // or link it to another main component
            <Route path="/movielist" element={<MovieList />} />
            <Route path="/moviedetails/:id" element={<MovieDetails />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;