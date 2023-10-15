import { BrowserRouter, Routes, Route } from "react-router-dom";
import PopularList from "./components/PopularList";
import SingleMovie from "./components/SingleMovie";
export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PopularList />} />
        <Route path="/movies:id" element={<SingleMovie />} />
      </Routes>
    </BrowserRouter>
  );
};
