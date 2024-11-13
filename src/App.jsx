import { Home } from "./pages/Home";
import { BrowserRouter } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  )
};
