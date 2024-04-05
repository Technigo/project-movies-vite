/* eslint-disable react/prop-types */
import "../pages/MovieDetails.css";

export const Description = ({ movieName, vote, overview }) => {
  const formatVote = Math.round(vote * 10) / 10;
  return (
    <div className="details">
      <h2>
        <span className="title">{movieName}</span>{" "}
        <span className="rating">
          <span>⭐️</span> <span>{formatVote}</span>
        </span>
      </h2>
      <p>{overview}</p>
    </div>
  );
};

// export const Description = ({ movieName, vote, overview }) => {
//   const formatVote = vote.toFixed(1);
//   return (
//     <div className="details">
//       <h2>
//         <span className="title">{movieName}</span>{" "}
//         <span className="rating">⭐️ {formatVote}</span>
//       </h2>
//       <p>{overview}</p>
//     </div>
//   );
// };
