import { Link } from "react-router-dom";
import { NavBar } from "./NavBar";

import "./Homepage.css"

export const HomePage = () => {
  return (
    <div className="homepage">
      <NavBar />
      <h1>Movies Galore</h1>
      <Link to="/movies">Go to Movies</Link> 
    </div>
  );
};
