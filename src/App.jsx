import { BrowserRouter, Link, Routes } from "react-router-dom"
import routes from "./components/routes"

export const App = () => {

  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">MovieDetails</Link>
            </li>
          </ul>
        </nav>
        <main>
          {/* Define the routes from the 'routes' component */}
          <Routes>{routes}</Routes>
        </main>
      </BrowserRouter>
    </>
  )
}
