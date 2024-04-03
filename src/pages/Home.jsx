import { useState } from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import Category from "../components/Category";
import Pagination from "../components/Pagination";
import styles from "../styling/Home.module.css";

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
    <div className={styles.home}>
      <h1 className={styles.headline}>Wen&apos;s movie site</h1>
      <Category onClick={changeListType} />

      <Outlet />
      <Pagination type={listType} onClick={changePage} />
    </div>
  );
};

export default Home;
