import { Link } from "react-router-dom"

export const NotFoundPage = () => {
  return (
    <div>
      <h2>Sorry but this page does not exist</h2>
      <p>Try going to an existing page</p>
      <Link to="/">or click here to go to home page</Link>
    </div>
  )
}
