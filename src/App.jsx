import { BrowserRouter, Routes } from "react-router-dom";
import { routes } from "./routes/routes";
import { Nav } from "./components/Nav";

export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Nav />
        <Routes>{routes}</Routes>
      </main>
    </BrowserRouter>
  );
};
