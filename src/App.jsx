import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { MovieList } from "./Components/MovieList";
import { SingleMovie } from "./Components/SingleMovie";



export const App = () => {
  return (
    <BrowserRouter>

      <Routes>
        {/* <Route path="/" element={<MovieList />} /> */}
        <Route path="movies/:id" element={<SingleMovie />} />
      </Routes>

    </BrowserRouter>
  )
}


//2 olika fetch movielist + singlemovie



// export const App = () => {
//   return <div>Find me in src/app.jsx!</div>;
// };


// API KEY= 833874c10582aaa2144a7cb70148fbd3
