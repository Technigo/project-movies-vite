import { BrowserRouter, Routes } from "react-router-dom";
import { MovieRoutes } from "./routes/MovieRoutes";
import { Header } from "./components/Header";
export const App = () => {
  
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>{MovieRoutes}</Routes>
        </main>
      </BrowserRouter>
    </>
  );
};
