import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Footer } from "./components/footer/Footer"
import { Header } from "./components/header/Header"
import { Details } from "./components/details/Details"
import { Listing } from "./components/listing/Listing"
import { NotFound } from "./components/404/NotFound"

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
              errorElement={<NotFound/>}
            />
            <Route
              path="/movies/:slug/*"
              element={<Details />}
              errorElement={<NotFound/>}
            />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}
