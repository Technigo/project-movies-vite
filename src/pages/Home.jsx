import PopularList from "../components/PopularList";
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [page, setPage] = useState(1);

  const changePage = e => {
    const pageNum = Number(e.target.name);
    setPage(pageNum);
  };

  return (
    <div>
      <h1>Wen&apos;s movie site</h1>
      <Link to="" />
      <PopularList page={page} />
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#">
              &laquo;
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" name="1" onClick={changePage}>
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" name="2" onClick={changePage}>
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" name="3" onClick={changePage}>
              3
            </a>
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
