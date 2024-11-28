React Router Boilerplate
React + Vite + React Router Library + Minimal CSS
Welcome, Technigo students! This boilerplate is designed specifically for you. We understand the importance of a smooth start, especially when diving into libraries like React Router. With this in mind, we've crafted an out-of-the-box solution to help you seamlessly integrate the router library into your projects.

Demo
NO CSS Boiler Plate
If you want a cleaner version of this boiler plate with no css, please go to the following link:

React Router Boiler Plate - No CSS
Original Features:
Vite Integration: Experience the speed and efficiency of Vite, ensuring your React projects are lightning-fast.
Hot Module Replacement (HMR): No more manual reloads. With HMR, see your changes in real-time as you code.
Custom Integrations:
React Router: React Router is an external library for React that provides routing capabilities. It allows developers to create multi-page applications within React, enabling navigation between different components without reloading the entire page.
Getting Started with the Project
1. Clone the Repository:
First, you'll need to get a copy of the repository on your local machine. You can do this using git. There are three common methods to clone a repository: USing the gitHub CLI, HTTPS and SSH.

1.1. Using HTTPS:
This is the default method and works universally. Simply copy the HTTPS URL from the repository's main page and use the following command:

git clone  https://github.com/Technigo/react-router-boiler-plate-minimal-css.git
1.2. Using SSH:
For those who have set up SSH keys with GitHub, this method provides a secure way without needing to enter your credentials every time. First, ensure you've set up SSH keys with GitHub . Then, copy the SSH URL from the repository's main page and use the following command:

git@github.com:Technigo/react-router-boiler-plate-minimal-css.git
1.3. Using Github CLI:
If you have the GitHub CLI installed, you can easily clone the repository and even perform many other GitHub operations directly from the command line. To clone the repository using GitHub CLI, use the following command:

gh repo clone Technigo/react-router-boiler-plate-minimal-css
2. Dependency Installation & Startup Development Server:
Once cloned, navigate to the project's root directory and this project uses npm (Node Package Manager) to manage its dependencies.

The below command is a combination of installing dependencies, opening up the project on VS Code and it will run a development server on your terminal.

npm i && code . && npm run dev 
Installing the React Library
React Router is an essential library for routing in React applications. There are a couple of ways you can install it, depending on your project's needs.

For a straightforward installation of just the React Router library, you can use the following command. This is the command being applied to this boiler plate.

npm install react-router-dom
With this boilerplate, you're not just getting a template; you're getting a head start. Dive in and make the most of your learning journey with Technigo!

Navigating through this repository
1. Routes Configuration (src/routes/routes.jsx):
This file is the heart of the routing system in this repository. It defines the paths and their associated components. Here's a quick look:

import { Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

const routes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </>
);

export default routes;
2. Pages Folder Structure:
These are the components that get rendered when you navigate to a specific route.

Home (src/pages/Home.jsx): This is the landing page. It provides a welcome message to Technigo students and offers some insights into the boilerplate's features.

About (src/pages/About.jsx): A simple about page with some placeholder text. It also displays some logos using the Logos component.

Contact (src/pages/Contact.jsx): Similar to the About page, it's a placeholder for contact information.

3. Main App Component (src/App.jsx):
This is where the magic happens! The BrowserRouter wraps our entire application, enabling the use of routing functionalities. Inside, you'll find a navigation bar with links to our defined routes and a Routes component that renders the appropriate page based on the current path.

import { BrowserRouter, Link, Routes } from "react-router-dom";
import routes from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Routes>{routes}</Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
Understanding the React Router Syntax
<BrowserRouter>: This is the wrapping component that provides the foundation for all the routing functionalities. Think of it as the stage where all the routing magic happens!

<nav> and <ul>: These are just standard HTML elements creating a navigation bar. Inside, we have a list (<ul>) of navigation items (<li>).

<Link to="/">: This is where React Router starts to shine! The <Link> component is like your regular <a> tag in HTML, but supercharged. The to prop tells the browser where to navigate when the link is clicked. So, <Link to="/">Home</Link> will take you to the homepage.

<Routes>{routes}</Routes>: This is the heart of our routing system. The <Routes> component is responsible for rendering the right component based on the current path. The {routes} inside is a collection of route definitions, telling our app which component to show for which path.

4. Happy Coding !
And that's it! With just a few lines of code, you've set up a dynamic navigation system for your React app. Happy coding! 