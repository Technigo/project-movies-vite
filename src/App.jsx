import { BrowserRouter } from "react-router-dom";
import { RouteList } from "./components/RouteList";

export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <RouteList />
      </main>
    </BrowserRouter>
  );
};
