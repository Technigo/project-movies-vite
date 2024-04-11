import { Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage"
import { AboutPage } from "../pages/AboutPage";
import { FilmPage } from "../pages/FilmPage";
import { LoginPage } from "../pages/LoginPage";
import { NotFoundPage } from "../pages/NotFoundPage";


export const routes = (
  <>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/film-page/:id" element={<FilmPage />} />
    <Route path="/login-page" element={<LoginPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </>
)