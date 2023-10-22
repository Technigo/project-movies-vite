import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";

// const container = document.getElementById('popularM')

// fetch('https://api.themoviedb.org/3/movie/popular?api_key=ec0818063a7c9ecfc3e940ce1ca33b19&language=en-US&page=1')
// then((response) => {
//   return response.json()
// })

// .then((json) => {
//   console.log(json)
// })

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
