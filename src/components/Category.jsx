import { NavLink } from "react-router-dom";

const Category = ({ category, onClick }) => {
  return (
    <div className="category">
      <NavLink
        to="?category=now_playing&page=1"
        className={({ isActive }) =>
          isActive && category === "now_playing"
            ? "category-link active"
            : "category-link"
        }
        name="upcoming"
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
      </NavLink>
    </div>
  );
};

export default Category;
