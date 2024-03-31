import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Footer } from "./components/footer/Footer"
import { Header } from "./components/header/Header"
import { Details } from "./components/details/Details"
import { Listing } from "./components/listing/Listing"

export const App = () => {

  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes> 
            {/* Conditional that makes the "page content" switch between components, depending on the URL*/}
            <Route
              path="/"
              element={<Listing />}
            />
            <Route
              path="/movies/:slug"
              element={<Details />}
            />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}
