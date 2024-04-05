import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MoviesList } from "../components/MoviesLists/MoviesList";
// import "../components/MoviesLists/moviesList.css";
// import "../Company.css"

export const Company = () => {
  const { companyId } = useParams();
  const [moviesList, setMoviesList] = useState([]);
  const [companyInfo, setCompanyInfo] = useState({});
  const [loading, setLoading] = useState(false); //add loading here;
  const API_Key = 'b9d9222d037c3b04f41cfe59a1e05d89' ;
  const discoverAPIUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_Key}&with_companies=${companyId}&language=en-US`;
  const companyAPIUrl = `https://api.themoviedb.org/3/company/${companyId}?api_key=${API_Key}`;

  const handleFetchCompany = async () => {
    setLoading(true);
    try {
      const response = await fetch(companyAPIUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    const data = await response.json();
    // console.log(JSON.stringify(data, null, 2));
    setCompanyInfo(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleFetchData = async () => {
    try {
      const response = await fetch(discoverAPIUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    const data = await response.json();
    // console.log(JSON.stringify(data, null, 2));
    setMoviesList(data.results);
    } catch (error) {
      console.log("error", error);
    }
    finally {
      setLoading(false);
    }
  };

  //handle first fetch
  useEffect(() => {
    handleFetchCompany();
    handleFetchData();
  },[]);

  return (
    <>
      {loading ? (
        <div className="loading">
          <div className="lds-dual-ring"></div>
        </div>
      ) : (
      <div className="main-company-container">
        <h1>{companyInfo.name}'s Movies</h1>
        <MoviesList data={moviesList} />
      </div>
      )}
    </>
  );
};