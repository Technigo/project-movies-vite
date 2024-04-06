/* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";
// import { Poster } from "./Poster";
// import "../pages/MovieList.css";
// import { useState } from "react";

// export const SeriesCard = ({ serie }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const handleMouseOver = () => {
//     setIsHovered(true);
//   };
//   const hanldeMouseLeave = () => {
//     setIsHovered(false);
//   };
//   return (
//     <Link to={`/serie/${serie.id}`}>
//       <div
//         onMouseOver={handleMouseOver}
//         onMouseLeave={hanldeMouseLeave}
//         className="card"
//       >
//         <Poster
//           poster_path={serie.poster_path}
//           title={serie.title}
//           imageClass={"mainImage"}
//         />

//         {isHovered && (
//           <div className="info">
//             <h1>{serie.title}</h1>
//             <p>Released: {serie.release_date}</p>
//           </div>
//         )}
//       </div>
//     </Link>
//   );
// };
