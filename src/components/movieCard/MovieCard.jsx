import { Link } from "react-router-dom";
import { HeadingH2 } from "../typography/headingH2/HeadingH2.jsx";
import { Paragraph } from "../typography/paragraph/Paragraph.jsx";
import "./movieCard.css";
import { DetailImage } from "../detailImage/DetailImage.jsx";

// Function for each individual movie card, where we map over the array of movies in movieData and display them using reusable components
export const MovieCard = ({ movieData }) => {
  return (
    <>
      {movieData.map((movie) => (
        <article className="movie-card" key={movie.id}>
          <Link to={`/details/${movie.id}`}>
            <DetailImage
              url={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
              altText={`Poster image of ${movie.title}`}
            />
            <div className="details">
              <HeadingH2 text={movie.title} />
              <Paragraph text={movie.release_date} />
            </div>
          </Link>
        </article>
      ))}
    </>
  );
};
