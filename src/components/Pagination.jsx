import { Link } from "react-router-dom";

const Pagination = ({ type, onClick }) => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="#">
            &laquo;
          </a>
        </li>
        <li className="page-item">
          <Link
            to={`${type}/1`}
            className="page-link"
            name="1"
            onClick={onClick}
          >
            1
          </Link>
        </li>
        <li className="page-item">
          <Link
            to={`${type}/2`}
            className="page-link"
            name="2"
            onClick={onClick}
          >
            2
          </Link>
        </li>
        <li className="page-item">
          <Link
            to={`${type}/3`}
            className="page-link"
            href="#"
            name="3"
            onClick={onClick}
          >
            3
          </Link>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            &raquo;
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
