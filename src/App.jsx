import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PopularList from "./components/PopularList";
import SingleMovie from "./components/SingleMovie";
import PageNotFound from "./components/PageNotFound";

// import { Link } from "react-router-dom";
export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PopularList />} />
        <Route path="/movies/:id" element={<SingleMovie />} />
        <Route path="/*" element={<PageNotFound />} />
        {/* <Route path="*" element={<Navigate to="/404" replace />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
