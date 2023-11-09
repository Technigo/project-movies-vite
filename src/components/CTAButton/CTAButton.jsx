import { Link } from "react-router-dom";

<Link to="/contact">Contact</Link>;

export const CTAButton = ({ btnTarget, movie }) => {
  let link = "";


const renderSwitch = (btnTarget) => {
  switch(btnTarget) {
     case 'movieDetail':
      return link = `/movie/${movie.id}`;
      case 'errorPage':
        return link = `/`;
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
