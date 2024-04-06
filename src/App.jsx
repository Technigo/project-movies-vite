import { Routes } from "react-router-dom"
import { Header } from "./Components/Header";
import { routes } from "./routes/routes";
import { Footer } from "./Components/Footer";


export const App = () => {
  return (
    <div>
      <Header />
      <Routes>{routes}</Routes>
      <Footer />  
    </div>
  )
}
