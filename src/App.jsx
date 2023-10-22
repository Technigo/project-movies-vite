// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Routes, Link, NavLink } from "react-router-dom";
import routes from "./routes/routes";


export const App = () => {
  return (
  <>
  <BrowserRouter>
  <main>
    <Routes>{routes}</Routes>
  </main>
  </BrowserRouter>
  </>
)
};