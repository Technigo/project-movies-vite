import { BrowserRouter, Link, Routes } from "react-router-dom";
import { MovieRoutes } from "./routes/MovieRoutes";
import { Header } from "./components/Header";

export const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <main>
          <Routes>{MovieRoutes}</Routes>
        </main>
      </BrowserRouter>
    </>
  );
};
