import { BrowserRouter, Routes } from "react-router-dom";
import routes from "./routes/routes";

// This is the main App component that serves as the entry point for the React application.
export const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="wrapper">
          {/* 
            The Routes component renders the defined routes in the application. 
            The 'routes' variable contains the route configuration.
          */}
          <Routes>{routes}</Routes>
        </div>
      </BrowserRouter>
    </>
  );
};
