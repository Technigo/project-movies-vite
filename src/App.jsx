import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage"; // Assuming the components are in the same directory
import { Detail } from "./pages/Detail"; // Assuming the components are in the same directory

function App() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzEwNDBiNTAzY2M0MzViNDk0MjU0ODRiMDZlYTc1NSIsInN1YiI6IjY1MmQyODNlNjYxMWI0MDBlMjU1MDMxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nzGRkQ839_qWKFn7k3BsxmVqMmHl11yXIf4z6QEk8z4",
    },
  };
  fetch("https://api.themoviedb.org/3/movie/changes?page=1", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
  return (
    <BrowserRouter>
      <Routes>
        {/* Route for displaying post details. The ":postId" is a dynamic segment that will match any value. */}
        <Route path="/" element={<HomePage />} />

        {/* Route for displaying cat fact details. The ":factId" is a dynamic segment that will match any value. */}
        <Route path="/movie" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
