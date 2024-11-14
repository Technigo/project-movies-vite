import { createGlobalStyle } from 'styled-components';
import backgroundImage from "../assets/background_sky.jpg"

export const GlobalStyles = createGlobalStyle`
  /* CSS Reset */
  *, *::before, *::after {
    box-sizing: border-box;
  }


:root {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

html, body {
    margin: 0;  /* Remove default margin */
    padding: 0; /* Remove default padding */
  }

body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    background: url(${backgroundImage}) no-repeat center center fixed;
    background-size: cover;
    color: #fff;
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
  }

/* Specific rule to reset the 'ul' element styling */
ul {
    list-style-type: none;  /* Remove default bullet points */
    margin: 0; /* Remove default margin */
    padding: 0; /* Remove default padding */
  }

`