/**
 * This component is the main entry point of the application and sets up routing for the app.
 * 
 * It uses BrowserRouter from react-router-dom to enable client-side routing and navigation.
 * 
 * The navigation bar contains links to "Home" and "About" pages.
 * 
 * The Routes component renders the app's routes, which are imported from the appRoutes module.
 * 
 * */

import { BrowserRouter, Routes, Link } from "react-router-dom";
import appRoutes from "./routes/appRoutes";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <nav>
          <li className="header-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </li>
        </nav>
        <main>
          <Routes>
            { appRoutes }
          </Routes>
        </main>
      </BrowserRouter></>
  )
}

export default App;
