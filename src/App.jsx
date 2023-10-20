import { BrowserRouter, Routes } from "react-router-dom";
import { routes } from "./routes/routes";

export const App = () => {
  return (
    <div className="container">
      {/* A router that manages all the links and routes in the project */}
      <BrowserRouter>
        <main>
          {/* The different routes are imported from the routes component for easier legibility and structure */}
          <Routes>{routes}</Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};
