import { Routes } from "react-router-dom"
import { Header } from "./components/Header";
import { routes } from "./routes/routes";
import { Footer } from "./components/Footer";


export const App = () => {
  return (
    <div>
      <Header />
      <Routes>{routes}</Routes>
      <Footer />  
    </div>
  )
}
