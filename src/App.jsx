import { BrowserRouter, Routes } from "react-router-dom";
import { routes } from "./routes/Routes";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>{routes}</Routes>
      </BrowserRouter>
    </>
  );
};
