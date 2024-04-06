import { Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage"
import { AboutPage } from "../pages/AboutPage";
import { MyInfo } from "../pages/MyInfo";
import { FilmPage } from "../pages/FilmPage";
import { LoginPage } from "../pages/LoginPage";
import { FavouriteMoviesPage } from "../pages/FavouriteMoviesPage.jsx";
import { NotFoundPage } from "../pages/NotFoundPage";


export const routes = (
  <>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/my-info" element={<MyInfo />} />
    <Route path="/film-page" element={<FilmPage />} />
    <Route path="/login-page" element={<LoginPage />} />
    <Route path="/favourite-movies-page" element={<FavouriteMoviesPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </>
)