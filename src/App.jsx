import { PopularList } from "./components/PopularList"
import "./App.css"

export const App = () => {
  return (
    <div className="app-container">
      <h1>Popular Movies</h1>
      <PopularList />
    </div>
  )
}
