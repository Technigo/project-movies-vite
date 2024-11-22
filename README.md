# Movie Explorer - React App
Movie Explorer is a React-based web application that allows users to explore and view movie details from various genres. The app integrates with a movie database API to fetch movies and display them categorized by genre. Users can click on any movie to see detailed information, including its synopsis, rating, and language.

# Key Features
Home Page:

Displays a list of movies categorized by genre. Each genre's movies are shown in a scrollable list of cards.
Clicking on a movie card leads to the movie's detailed information page.

Movie Details Page:

Provides in-depth details about the selected movie, including its title, overview, original language, rating, and a backdrop image.
The page is responsive and adapts to different screen sizes for an optimal viewing experience.

Genre Filtering:

Movies are categorized into specific genres (such as Action, Science Fiction, Family, Drama, etc.).
Each genre is displayed as a section with its associated movies.

# Technologies Used
React: For building the user interface and handling routing between pages.

React Router: For client-side navigation, enabling users to switch between the home page and movie details page without page reloads.

Styled-components: For writing component-level CSS, allowing for scoped and dynamic styling.

TMDB API: For fetching movie data based on genres and movie details (using functions like fetchMoviesByGenre and fetchGenres).

FontAwesome: For adding icons to improve the UI, including the back navigation icon on the movie detail page.

React Hooks: For managing state and side effects, specifically using useState, useEffect, and custom hooks like useMovies to fetch movie data.

PropTypes: For validating props passed to components, ensuring correct data types.

# View it live
https://gittesmoviesite.netlify.app/

