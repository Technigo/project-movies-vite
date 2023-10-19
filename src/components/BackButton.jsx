// This component represents a "Go Back" button to navigate back to the list of movies. It's a reusable component.
import "./backbutton.css";
import { Link } from 'react-router-dom';
import arrowIcon from './arrow.svg'; 

export function BackButton() {
  return (
    <div className="button-container">
      <Link to="/" className="button">
        <img src={arrowIcon} alt="Arrow" className="icon" /> 
        Go Back
      </Link>
    </div>
  );
}