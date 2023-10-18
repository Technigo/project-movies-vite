import { BrowserRouter, Routes } from "react-router-dom";
import { routes } from "./routes/routes";
export const App = () => {

  return (
    <BrowserRouter>
      {/* <nav>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/movielist">Movielist</Link>
        </ul>
      </nav> */}
      <Routes>
        {routes}
      </Routes>
    </BrowserRouter>

  )

};
