import { BrowserRouter, Routes } from "react-router-dom";
import { routes } from "./routes/routes.jsx";

// Added BrowserRouter and Routes. Routes gets its values from the routes.jsx-file.
export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>{routes}</Routes>
      </main>
    </BrowserRouter>
  );
};
