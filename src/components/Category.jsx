import { NavLink } from "react-router-dom";
import styles from "../styling/Category.module.css";
import PropTypes from "prop-types";

const ListTypes = [
  { endpoint: "now_playing", name: "Now playing" },
  { endpoint: "upcoming", name: "Upcoming" },
  { endpoint: "popular", name: "Popular" },
  { endpoint: "top_rated", name: "Top rated" },
];

const Category = ({ category, onClick }) => {
  return (
    <div className={styles.category}>
      {ListTypes.map(listType => (
        <NavLink
          to={`?category=${listType.endpoint}&page=1`}
          className={({ isActive }) =>
            isActive && category === listType.endpoint
              ? `${styles.categoryLink} ${styles.active}`
              : styles.categoryLink
          }
          name={listType.endpoint}
          key={listType.endpoint}
          onClick={onClick}
        >
          {listType.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Category;

Category.propTypes = {
  category: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
