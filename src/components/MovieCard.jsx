import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";

export const MovieCard = ({ id, title, rating, poster_path }) => {
  // Pass id as prop
  return (
    <Link to={`/movie/${id}`}>
      {" "}
      {/* Include id in the URL */}
      <div className="movie-card">
        <img
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          alt={title}
        />
        <div className="movie-card-info">
          <h2>{title}</h2>
          <p>⭐ {rating}</p>
        </div>
      </div>
    </Link>
  );
};

// import React from "react";
// import { Link } from "react-router-dom";
// import "./MovieCard.css";

// export const MovieCard = ({ title, rating, poster_path }) => {
//   return (
//     <Link to="/movie">
//       <div className="movie-card">
//         <img
//           src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
//           alt={title}
//         />
//         <div className="movie-card-info">
//           <h2>{title}</h2>
//           <p>⭐ {rating}</p>
//         </div>
//       </div>
//     </Link>
//   );
// };
