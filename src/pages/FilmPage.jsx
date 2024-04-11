import {useState, useEffect} from "react"
import { Link, useParams } from "react-router-dom"
import { NotFoundPage } from "./NotFoundPage"
import "./FilmPage.css"

import "./FilmPage.css"

export const FilmPage = () => {
  const { id } = useParams()
  const [FilmPage, setFilmPage] = useState (null)
  const [error, setError] = useState (null)

  const API_KEY = "84d51ec61f17921d3880ccaddc60a0c3"

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load movies. Please check the url.");
        }
        return res.json();
      })
      .then((res) => {
        setFilmPage(res)
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [id]);

  return (
    <div className="film-page-container">
      {FilmPage && (
        <>
          <Link to="/" className="link-film-page">
            Go back
          </Link>
          <div className="content">
            <img
              className="film-img"
              src={`https://image.tmdb.org/t/p/w500/${FilmPage.poster_path}`}
              alt={FilmPage.title}
            />
            <div className="content-text">
              <h1>{FilmPage.title}</h1>
              <div className="rating">
                 {Math.round(FilmPage.vote_average * 10) / 10} ⭐️
              </div>
              <p>{FilmPage.overview}</p>
              <p className="release">Release: {FilmPage.release_date}</p>
            </div>
          </div>
          <img
            className="film-background-img"
            src={`https://image.tmdb.org/t/p/w500/${FilmPage.backdrop_path}`}
            alt={FilmPage.title}
          />
          <div className="overlay"></div>
        </>
      )}
      {error && <NotFoundPage />}
    </div>
  )
}
