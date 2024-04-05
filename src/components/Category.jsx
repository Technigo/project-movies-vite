import { NavLink } from "react-router-dom";
import styles from "../styling/Category.module.css";

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
      {/* <NavLink
        to="?category=now_playing&page=1"
        className={({ isActive }) =>
          isActive && category === "now_playing"
            ? `${styles.categoryLink} ${styles.active}`
            : styles.categoryLink
        }
        name="now_playing"
        onClick={onClick}
      >
        Now Playing
      </NavLink>
      <NavLink
        to="?category=upcoming&page=1"
        className={({ isActive }) =>
          isActive && category === "upcoming"
            ? "category-link active"
            : "category-link"
        }
        name="upcoming"
        onClick={onClick}
      >
        Upcoming
      </NavLink>
      <NavLink
        to="?category=popular&page=1"
        className={({ isActive }) =>
          isActive && category == "popular"
            ? "category-link active"
            : "category-link"
        }
        name="popular"
        onClick={onClick}
      >
        Popular
      </NavLink>
      <NavLink
        to="?category=top_rated&page=1"
        className={({ isActive }) =>
          isActive && category == "top_rated"
            ? "category-link active"
            : "category-link"
        }
        name="top_rated"
        onClick={onClick}
      >
        Top rated
      </NavLink> */}
    </div>
  );
};

export default Category;
