// Route: /movies/:id, component: Detail

// This route expects a movie ID in the URL and is responsible for showing more details about a movie after you click on it. It uses useParams from react-router-dom to get the id from the URL and then passes that into an API call (within useEffect) to themoviedb.org to fetch details about a single movie, then puts the response into state using useState and finally renders it onto the page.

//MAYBE MAKE SOME COMPONENTS FOR the Movie display (like the card)

import React from "react";

export const MovieDetails = () => {
  return <div>Detail</div>;
};
