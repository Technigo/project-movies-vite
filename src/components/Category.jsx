import { Link } from "react-router-dom";

const Category = ({ onClick }) => {
  return (
    <div>
      <Link to={`upcoming/1`} name="upcoming" onClick={onClick}>
        Upcoming
      </Link>
      <Link to={`now_playing/1`} name="now_playing" onClick={onClick}>
        Now playing
      </Link>
      <Link to={`top_rated/1`} name="top_rated" onClick={onClick}>
        Top rated
      </Link>
    </div>
  );
};

export default Category;
