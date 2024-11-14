import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./routes/Routes";

export const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};
