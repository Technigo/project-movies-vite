import { BrowserRouter, Routes } from "react-router-dom";
import { routes } from "./routes/routes";

export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>{routes}</Routes>
      </main>
    </BrowserRouter>
  );
};

// API KEY : d2c54dff5b4be96d24e487a959629544
