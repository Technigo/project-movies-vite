import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { MoviePages } from "./pages/MoviePages";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movie/:id",
        element: <MoviePages />,
      }
    ]
  }
]); 