import { Link } from "react-router-dom";

<Link to="/contact">Contact</Link>;

export const CTAButton = ({ btnTarget, movie }) => {
  let link = "";

  switch (btnTarget) {
    case "movieDetail":
      link = `/movie/${movie.id}`;
      break;
    case "website":
      link = `/movie/${movie.id}`;
      break;
    default:
      console.log("Something is wrong");

      buttonTarget();
      console.log(buttonTarget());
      return (
        <Link to={link}>
          <button>CTAButton</button>
        </Link>
      );
  }
};
