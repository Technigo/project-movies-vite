import { useState } from "react"
import { useHistory } from "react-router-dom"
import { useMovieContext } from "./MovieContext"

const Login = () => {
  const { setUserName } = useMovieContext()
  const [name, setName] = useState("")
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    setUserName(name) 
    history.push("/liked-movies")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Log in</button>
    </form>
  )
}

export default Login
