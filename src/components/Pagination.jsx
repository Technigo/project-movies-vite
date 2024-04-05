import { NavLink } from "react-router-dom";
import styles from "../styling/Pagination.module.css";
const PageNums = [1, 2, 3, 4, 5];

const Pagination = ({ type, page, onClick }) => {
  return (
    <div aria-label="Page navigation" className={styles.pagination}>
      {PageNums.map(num => (
        <NavLink
          key={num}
          to={`?category=${type}&page=${num}`}
          className={({ isActive }) =>
            isActive && page == num
              ? `${styles.pageLink} ${styles.active}`
              : styles.pageLink
          }
          name={num}
          onClick={onClick}
        >
          {num}
        </NavLink>
      ))}
    </div>
  );
};

export default Pagination;
