/* eslint-disable react/prop-types */
import "../pages/MovieDetails.css";

export const Description = ({ movieName, vote, overview }) => {
  const formatVote = vote?.toFixed(1); //optional chaining operator (?.), checks that the value is not null or undefined
  return (
    <div className="details">
      <h2>
        <span className="title">{movieName}</span>
        <span className="rating">⭐️ {formatVote}</span>
      </h2>
      <p>{overview}</p>
    </div>
  );
};
