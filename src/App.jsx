import { BrowserRouter, Link, Routes } from "react-router-dom";
import { routes } from "./routes/routes.jsx";
import { BackButton } from './components/backButton/BackButton'

// Added BrowserRouter and Routes. Routes gets its values from the routes.jsx-file. Put the BackButton and "link" to the Popular movies page in a nav-element.
export const App = () => {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <ul className="startpage-ul">
          <li className="startpage-li"><BackButton /></li>
          <li className="startpage-li"><Link to="/">Popular movies</Link></li>
        </ul>
      </nav>
      <main>
        <Routes>{routes}</Routes>
      </main>
    </BrowserRouter>
  )
};
