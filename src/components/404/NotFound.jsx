import { useRouteError } from "react-router-dom"
import "./NotFound.css"

export const NotFound = () => {
  const error = useRouteError()
  console.error(error)
  return (
    <div>
      <h1>Oups!</h1>
      <p>{error.statusText || error.message}</p>
    </div>
  )
}
