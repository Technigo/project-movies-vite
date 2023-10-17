import { BrowserRouter } from "react-router-dom";
import { MyRoutes } from "./Components/MyRoutes";

export const App = () => {
  return (
    <BrowserRouter>
      <MyRoutes />
    </BrowserRouter>
  )
};
