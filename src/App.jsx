// App.jsx
import { routes } from "./routes/routes";
import { BrowserRouter, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>{routes}</Routes>
      </BrowserRouter>
    </div>
  ) 
};

