import { BrowserRouter, Link, Routes } from "react-router-dom";
import { routes } from "./routes/routes";
import { Footer } from "./components/footer/Footer";

export const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        {/* <nav>
          <ul className="app-ul">
            <li className="app-li">
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav> */}

        <main>
          <Routes>{routes}</Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
