import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PopularList } from "./components/PopularList"

export function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<PopularList />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}