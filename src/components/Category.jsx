import { Link } from "react-router-dom";

const Category = ({ onClick }) => {
  return (
    <div>
      <Link to="?category=upcoming&page=1" name="upcoming" onClick={onClick}>
        Upcoming
      </Link>
      <Link to="?category=popular&page=1" name="popular" onClick={onClick}>
        Popular
      </Link>
      <Link to="?category=top_rated&page=1" name="top_rated" onClick={onClick}>
        Top rated
      </Link>
    </div>
  );
};

export default Category;
