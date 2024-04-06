/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Poster } from "../components/Poster";
import "../pages/MovieList.css";
import { useState } from "react";

export const Card = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseOver = () => {
    setIsHovered(true);
  };
  const handldeMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <Link to={`/movie/${movie.id}`}>
      <div
        onMouseOver={handleMouseOver}
        onMouseLeave={handldeMouseLeave}
        className="card"
      >
        <Poster
          poster_path={movie.poster_path}
          title={movie.title}
          imageClass={"mainImage"}
        />

        {isHovered && (
          <div className="info">
            <h1>{movie.title}</h1>
            <p>Released: {movie.release_date}</p>
          </div>
        )}
      </div>
    </Link>
  );
};

// import { Link } from "react-router-dom";
// import { Poster } from "../components/Poster";
// import "../pages/MovieList.css";
// import { useState } from "react";

// export const Card = ({ item, type }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const handleMouseOver = () => {
//     setIsHovered(true);
//   };
//   const hanldeMouseLeave = () => {
//     setIsHovered(false);
//   };

//   const renderDetails = () => {
//     if (type === "movie") {
//       return (
//         <>
//           <h1>{item.title}</h1>
//           <p>Released: {item.release_date}</p>
//         </>
//       );
//     } else if (type === "series") {
//       return (
//         <>
//           <h1>{item.name}</h1>
//           <p>First aired: {item.first_air_date}</p>
//         </>
//       );
//     }
//   };

//   return (
//     <Link to={`/${type}/${item.id}`}>
//       <div
//         onMouseOver={handleMouseOver}
//         onMouseLeave={hanldeMouseLeave}
//         className="card"
//       >
//         <Poster
//           poster_path={item.poster_path}
//           title={type === "movie" ? item.title : item.name}
//           imageClass={"mainImage"}
//         />

//         {isHovered && <div className="info">{renderDetails()}</div>}
//       </div>
//     </Link>
//   );
// };
