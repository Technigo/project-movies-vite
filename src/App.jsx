import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage"; // Assuming the components are in the same directory
import { Detail } from "./pages/Detail"; // Assuming the components are in the same directory

function App() {
  const API_KEY = "fc4247df8698a43e7abf3f62f337adaf";
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
