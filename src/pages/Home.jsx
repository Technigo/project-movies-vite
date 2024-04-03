import PopularList from "../components/PopularList";
import { useState } from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";
import Category from "../components/Category";
import Pagination from "../components/Pagination";

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
      <Category onClick={changeListType} />
      <Outlet />
      <Pagination type={listType} onClick={changePage} />
    </div>
  );
};

export default Home;
