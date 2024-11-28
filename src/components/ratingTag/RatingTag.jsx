import { AiFillStar } from "react-icons/ai";
import "./ratingTag.css";

// Component for the rating tag
export const RatingTag = ({ rate }) => {
  return (
    <span className="rating">
      {" "}
      <AiFillStar className="star" />
      {rate.toFixed(1)} {/*Rounds off the rating score to one decimal*/}
    </span>
  );
};
