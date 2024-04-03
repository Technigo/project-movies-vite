import { Link } from "react-router-dom";

const Category = ({ onClick }) => {
  return (
    <div>
      <Link to={`upcoming/1`} name="upcoming" onClick={onClick}>
        Upcoming
      </Link>
      <Link to={`popular/1`} name="popular" onClick={onClick}>
        Popular
      </Link>
      <Link to={`top_rated/1`} name="top_rated" onClick={onClick}>
        Top rated
      </Link>
    </div>
  );
};

export default Category;
