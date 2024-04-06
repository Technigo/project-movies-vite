import { BrowserRouter, Routes } from "react-router-dom";
import { routes } from "./routes/routes";
import { Header } from "./Components/Header";


export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="card">
          <Routes>{routes}</Routes>
        </div>        
      </BrowserRouter>
    </div>
  )
}
