import PopularList from "../components/PopularList";
import { useState } from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";
import Category from "../components/Category";

const Home = () => {
  const [page, setPage] = useState(1);
  const [listType, setListType] = useState("popular");

  const changePage = e => {
    const pageNum = Number(e.target.name);
    setPage(pageNum);
  };

  const changeListType = e => {
    const value = e.target.name;
    setListType(value);
  };

  return (
    <div>
      <h1>Wen&apos;s movie site</h1>
      {/* <button
        onClick={e => {
          setListType(e.target.value);
        }}
        value="upcoming"
      >
        Upcoming
      </button> */}
      <Category onClick={changeListType} />
      <Outlet />
      {/* </Link> */}
      {/* <PopularList page={page} /> */}
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#">
              &laquo;
            </a>
          </li>
          <li className="page-item">
            <Link
              to={`${listType}/1`}
              className="page-link"
              name="1"
              onClick={changePage}
            >
              1
            </Link>
          </li>
          <li className="page-item">
            <Link
              to={`${listType}/2`}
              className="page-link"
              name="2"
              onClick={changePage}
            >
              2
            </Link>
          </li>
          <li className="page-item">
            <Link
              to={`${listType}/3`}
              className="page-link"
              href="#"
              name="3"
              onClick={changePage}
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
    </div>
  );
};

export default Home;
