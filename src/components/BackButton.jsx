// This component represents a "Go Back" button to navigate back to the list of movies. It's a reusable component.
import "./backbutton.css";
import { Link } from 'react-router-dom';

export function BackButton() {
  return (
    <Link to="/">
      <button>Go Back</button>
    </Link>
  );
}
