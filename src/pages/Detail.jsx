import { useState, useEffect } from "react";
import { useParams, Link} from "react-router-dom"; //Lägg till link här om behövs senare
 import { HomeButton } from "./HomeButton";
import "./Detail.css";

export const Detail = () => {
  const [movie, setMovie] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=6420add5c0a9b0e0b9462a92916c3187&language=en-US`
    )
      .then((res) => res.json())
      .then((json) => {
        setMovie(json);
      });
  }, [id]);

  return (
    <article className="detailPage">
      <Link to="/" className="backLink">
        <HomeButton /> Movies
      </Link>
      {movie && (
        <div
          className="background"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
          }}
        >
          <div className="summary">
            <img
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="details">
              <h1>
                <span className="title">{movie.title}</span>{" "}
                <span className="rating">
                  {Math.round(movie.vote_average * 10) / 10}
                </span>
              </h1>
              <p>{movie.overview}</p>
            </div>
          </div>
        </div>
      )}
    </article>
  );
};
