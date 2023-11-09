import { Link } from "react-router-dom";

<Link to="/contact">Contact</Link>;

export const CTAButton = ({ btnTarget, movie }) => {

const renderSwitch = (btnTarget) => {
  switch(btnTarget) {
     case 'movieDetail':
      return `/movie/${movie.id}`;
      case 'errorPage':
        return `/`;
    default:
      return null;
  }
}

      return (
        <Link to={renderSwitch(btnTarget)}>
         CTAButton
        </Link>
      );
  
};
