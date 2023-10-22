<h1 align="center">
  <a href="">
    <img src="/src/assets/movies.svg" alt="Project Banner Image">
  </a>
</h1>

# Movie Site Project

We will start of Sprint 3 of this boot camp off by creating your very own movie site. This is our first multi-page React application, using a fun new movie API. Our site utilises themoviedb.org's API to showcase movies and their details. Features fetching popular movies, rendering movie specifics, and managing image URLs. Designed with a focus on responsiveness and accessibility. Enhancements include error handling, loading states, and dynamic movie lists

Project completed with paired programming by - Elba Cacan & Rebecca Morton.

## Getting Started with the Project

### Dependency Installation & Startup Development Server

Once cloned, navigate to the project's root directory and this project uses npm (Node Package Manager) to manage its dependencies.

The command below is a combination of installing dependencies, opening up the project on VS Code and it will run a development server on your terminal.

```bash
npm i && code . && npm run dev
```

### The Problem

Describe how you approached to problem: We first decided on how to structure our app, using components/pages for our home screen, which displays the list of movies, a movie detail page and a movie cardcomponent. All our components/pages had their own .css files.

We had to experiment with grid/flex box and other css to make our app responsive for mobile and were confident fetching the API details. One issue was how to display the full screen image on the movie page and style the text to fit nicely.

What tools and techniques you used to solve it: We used React Router (Route, Routes, Link, NavLink) as well as useEffect and useState hooks to help fetch and destructure data to render in the app.

What technologies did you use?: HTML5, CSS3, React, React Router, with Editor: VS Code

If you had more time, what would be next?: 
We were able to create a loading screen as per intermediate stretch goals, with more time we would love to have a menu and display other popular movie lists from other countries.

### View it live

https://wk9-project-movie-site-c05bc5.netlify.app/

## Instructions

<a href="instructions.md">
   See instructions of this project
  </a>
