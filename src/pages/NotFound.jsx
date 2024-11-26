// NotFoundPage.jsx - This component displays a custom 404 error page for unmatched routes.
// It informs the user that the page they attempted to access does not exist and provides a link back to the homepage.

import { Link } from "react-router-dom"; // Import Link component for navigation back to home

export const NotFound = () => {
  return (
    <div>
      {/* Error message indicating the page is not found */}
      <h1>
        Oops...it seems that the page you are trying to access does not exist.
      </h1>

      {/* Link to navigate back to the home page */}
      <Link to="/">Go home</Link>
    </div>
  );
};

// Summary:
// The NotFoundPage component serves as a 404 error page, guiding users back to the home page if they encounter an invalid route.
// It improves the user experience by handling incorrect URLs gracefully and providing clear navigation options.
