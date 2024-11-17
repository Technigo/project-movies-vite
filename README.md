<h1 align="center">
  <a href="">
    <img src="/src/assets/movies.svg" alt="Project Banner Image">
  </a>
</h1>

# Movie Site Project

This project involves building a movie site using the themoviedb.org API. The application allows users to view a list of popular movies, click on a specific movie, and see detailed information about it on a separate page. The focus is on implementing dynamic routing, API integration, and responsive design to create a seamless user experience.

### The Problem

The main challenge was to dynamically fetch and display movie data from the API while ensuring a responsive and accessible design. To solve this:

#### 1. Planning:

- I started by breaking the app into components, such as MovieList, MovieCard, and MovieDetails.
- Routes were planned using React Router, with a / route for the movie list and /movies/:id for the detailed view.

#### 2. Tools and Technologies:

- **React** for building the user interface.
- **React** Router for managing routes and dynamic parameters.
- **Fetch API** for retrieving movie data.
- **CSS** for styling, ensuring responsiveness across devices.

#### 3. Implementation:

- The app fetches a list of popular movies using the API and displays them as clickable movie cards.
- Clicking a card navigates to a detailed page, where data is fetched based on the movie's unique ID.

#### 4. Future Improvements:

- Adding loading spinners to handle slower networks.
- Implementing error handling for invalid movie IDs with a "Not Found" page.
- Expanding the app to include features like filtering by genres or displaying upcoming releases.

### View it live

https://project-movies-emelienyberg.netlify.app/

## Instructions

<a href="instructions.md">
   See instructions of this project
  </a>
