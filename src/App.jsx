import { BrowserRouter, Routes } from "react-router-dom";
import { routes } from "./routes/routes";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";


export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="card">
          <Routes>{routes}</Routes>
        </div>
        <Footer />       
      </BrowserRouter>
    </div>
  )
}
