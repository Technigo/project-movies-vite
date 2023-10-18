import { AiFillStar } from "react-icons/ai";
import "./ratingTag.css";

export const RatingTag = ({ rate }) => {
  return (
    <span className="rating">
      {" "}
      <AiFillStar className="star" />
      {rate.toFixed(1)}
    </span>
  );
};
