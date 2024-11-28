import { BrowserRouter, Routes } from "react-router-dom"
import routes from "./components/routes"

export const App = () => {

  return (
    <>
      <BrowserRouter>
        <main>
          {/* Define the routes from the 'routes' component */}
          <Routes>{routes}</Routes>
        </main>
      </BrowserRouter>
    </>
  )
}
