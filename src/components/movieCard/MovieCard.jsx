import { Link } from "react-router-dom";
import { HeadingH2 } from "../typography/headingH2/HeadingH2.jsx";
import { Paragraph } from "../typography/paragraph/Paragraph.jsx";
import "./movieCard.css";
import { DetailImage } from "../detailImage/DetailImage.jsx";

// Variables global for MovieCard.jsx
// Helper API to find correct images size, click on it to see the different available sizes
// const API_KEY = import.meta.env.VITE_MOVIEDB_KEY;
// const IMAGE_FINDER = "https://api.themoviedb.org/3/configuration?api_key=";
// console.log(`${IMAGE_FINDER}${API_KEY}`);

export const MovieCard = ({ movieData }) => {
  console.log(movieData);
  return (
    <>
      {
        movieData.map((movie) => (
          <article className="movie-card" key={movie.id}>
            {/* The regex-pattern below replaces all colons and empty spaces for dashes for a nicer url */}
            <Link to={`/detail/${movie.title.toLowerCase().replace(/[\s:]+/g, '-')}`}>
              <DetailImage url={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`} altText={`Poster image of ${movie.title}`} />
              <div className="details">
                <HeadingH2 text={movie.title} />
                <Paragraph text={movie.release_date} />
              </div>
            </Link>
          </article>
        ))
      }
    </>
  )
}