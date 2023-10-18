# Huadan's Movie Site Project🍿🍿🍿🍿🍿
Welcome to the Movie Site Project! The project is aim to create our own movie site. We've built the first multi-page React application and use a fun new API from the database https://developer.themoviedb.org/reference/intro/getting-started.

## Getting Started with the Project 🚌
I began this project by following Technigo's instructions and obtaining an API key from the movie database. Exploring the various endpoints was an insightful experience, which I utilized to enhance the user experience by adding a selection feature for increased interactivity.

Subsequently, I realized that the API key needed to be added to the .env document and included in the .gitignore file. While trying to import the API key from the .env to the JSX file, I initially used process.env, which wasn't compatible with VITE. To resolve this, I had to search for a way to incorporate the .env file in React Vite. Although finding a solution was challenging at first, persistent searching led me to an informative article.

Upon deployment, I encountered numerous error messages on Netlify, which prompted me to realize that I also needed to add the API key in Netlify and configure the .toml file to adjust the route path for the "404 Not Found" page.

Throughout this process, I thoroughly enjoyed working on this project, even completing it twice: once individually and another time in collaboration with my partner Lisa. You can find our joint project at this GitHub repository and visit the deployed version at this address. Working with different individuals was an enriching experience, making this week truly memorable.

### Dependency Installation & Startup Development Server 👩‍💻
Once cloned, navigate to the project's root directory and this project uses npm (Node Package Manager) to manage its dependencies.

The command below is a combination of installing dependencies, opening up the project on VS Code and it will run a development server on your terminal.

```bash
npm i && code . && npm run dev
npm i react-router-dom
npm i react-loader-spinner
npm i react-rating-stars-component
```

### The Most Challening Part💪
- The most challenging aspect arose during the deployment process. I attempted to add the _redirects document and netlify.toml, but encountered issues. After extensive searching on Stack Overflow, I eventually pinpointed the problem: I had inadvertently added the build section twice, once in Netlify and once in the netlify.toml file. Nevertheless, this experience proved educational as I learned how to incorporate the built-in toml functionality within Netlify.


### View it live⭐️🎬⭐️
You can view the live version of the Movie Site Project by visiting (https://movie-site-huadan.netlify.app/)
