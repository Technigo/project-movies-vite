import { NavLink } from "react-router-dom";

const Pagination = ({ type, page, onClick }) => {
  return (
    <div aria-label="Page navigation" className="pagination">
      <NavLink
        to={`?category=${type}&page=1`}
        className={({ isActive }) =>
          isActive && page == 1 ? "page-link active" : "page-link"
        }
        name="1"
        onClick={onClick}
      >
        1
      </NavLink>
      <NavLink
        to={`?category=${type}&page=2`}
        className={({ isActive }) =>
          isActive && page == 2 ? "page-link active" : "page-link"
        }
        name="2"
        onClick={onClick}
      >
        2
      </NavLink>
      <NavLink
        to={`?category=${type}&page=3`}
        className={({ isActive }) =>
          isActive && page == 3 ? "page-link active" : "page-link"
        }
        name="3"
        onClick={onClick}
      >
        3
      </NavLink>
      <NavLink
        to={`?category=${type}&page=4`}
        className={({ isActive }) =>
          isActive && page == 4 ? "page-link active" : "page-link"
        }
        name="4"
        onClick={onClick}
      >
        4
      </NavLink>
      <NavLink
        to={`?category=${type}&page=5`}
        className={({ isActive }) =>
          isActive && page == 5 ? "page-link active" : "page-link"
        }
        name="5"
        onClick={onClick}
      >
        5
      </NavLink>
    </div>
  );
};

export default Pagination;
