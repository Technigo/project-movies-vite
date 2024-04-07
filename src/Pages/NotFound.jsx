import { Link } from "react-router-dom";
import "../assets/components/Movie.css";

export const NotFound = () => {

  return (
    <div className="go-home">

      <Link to={"/"} className="go-home-btn" >
        <button alt="Go home"></button>
      </Link>
      <h1>
        Oh Uh, These are not the droids you are looking for...</h1>
      <h2>..it seems that the page you are trying to access doesn&apos;t exist.{" "}</h2>


    </div>
  );
};
