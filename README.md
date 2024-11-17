# Movie Site Project

This is an interactive movie guide built with React Router and the TMDb API. It allows users to browse movie categories and discover detailed information about a selected film.

### The Problem

The project was first organized into key tasks: setting up routes, fetching data from the API, identifying and creating reusable components, and styling the site. Functionality was prioritized first, beginning with integrating and testing the API and ending with a custom Error page and a favicon for a more polished user experience.

I became aware of an issue with securing API keys from a previous project, so this time I learned best practices for secure API key management by setting up an .env file and an apiConfig file.

For navigation, I used React Router, while useState and useEffect managed state and data fetching. Error handling was implemented using try/catch blocks, with a custom Error page for invalid movie IDs and unmatched routes. I used styled-components for dynamic and reusable styles within individual components. For MovieCard and MovieDetails, I opted for separate CSS files to manage their specific styling requirements more efficiently, and a generic index.css file was used for global styles as well.

If I had more time, I would implement more advanced filtering and sorting options for movies by genre, release year, or rating. I would also like to add a "Favorites" feature for users to save movies they like.

### View it live

https://showtime-selector.netlify.app/
